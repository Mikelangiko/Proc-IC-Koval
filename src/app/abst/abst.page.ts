import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

import { clas_do } from '../class/abstr/clasify';
import { PaintTool } from '../class/abstr/abstr3';
@Component({
  selector: 'app-abst',
  templateUrl: './abst.page.html',
  styleUrls: ['./abst.page.scss'],
  standalone: false,
})
export class AbstPage implements OnInit {
  paintTools: PaintTool[] = [];
  loading: any;
  dataUrl = 'https://api.jsonbin.io/v3/b/67d889928960c979a5739b3f';

  constructor(
    public loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadTools();
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async loadTools() {
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Завантаження...',
    });
    await this.loading.present();

    try {
      const res = await fetch(this.dataUrl);
      if (!res.ok) {
        throw new Error('Помилка завантаження даних: ' + res.status);
      }

      const json = await res.json();
      console.log(json.record);
      const toolsData = json.record;

      if (!toolsData || !Array.isArray(toolsData)) {
        throw new Error('Невірний формат JSON: відсутній масив tools');
      }

      this.paintTools = toolsData.map((item: any) =>
        clas_do.getPaint(item.type, item.color, item.length, item.spec)
      );
    } catch (error: any) {
      this.presentAlert('Помилка: ' + error.message);
      console.error('Помилка:', error);
    } finally {
      this.loading.dismiss();
    }
  }

  getMaxLength(): number {
    return Math.max(...this.paintTools.map((tool) => tool.length));
  }
}
