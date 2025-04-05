import { IFoodItem } from './../interpage/interfooditem';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { FoodFactory } from '../interpage/FoodFactory';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
  standalone: false,
})
export class Tab6Page implements OnInit {
  foodList: IFoodItem[] = [];
  dataUrl = 'https://api.jsonbin.io/v3/b/67f2622b8960c979a57f3b02';
  loading: any;

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: msg,
      buttons: ['Ок'],
    });
    await alert.present();
  }

  async loadData() {
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Завантаження...',
    });
    await this.loading.present();

    try {
      const res = await fetch(this.dataUrl);
      if (!res.ok) {
        throw new Error('Помилка завантаження: ' + res.status);
      }

      const json = await res.json();

      const foodData = json.record.food;
      if (!foodData || !Array.isArray(foodData)) {
        throw new Error('Невірний формат JSON: очікувався масив food');
      }

      this.foodList = foodData.map((item: any) => FoodFactory.createFood(item));
      console.log('Успішно створено об’єкти:', this.foodList);
    } catch (err: any) {
      console.error('Помилка:', err);
      this.presentAlert(err.message);
    } finally {
      this.loading.dismiss();
    }
  }
}
