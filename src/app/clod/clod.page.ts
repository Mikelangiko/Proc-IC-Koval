import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  LoadingController,
  AlertController,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonCardContent,
  IonItem,
} from '@ionic/angular';

import { Sale } from '../class/dat_sel/sel';
import { SalesList } from '../class/dat_sel/sel_list';
@Component({
  selector: 'app-clod',
  templateUrl: './clod.page.html',
  styleUrls: ['./clod.page.scss'],
  standalone: false,
})
export class ClodPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  salesList = new SalesList();
  dataUrl = 'https://api.jsonbin.io/v3/b/67c073dde41b4d34e49dd583';
  loading: any;
  lineChart: any;

  constructor(
    public loadingController: LoadingController,
    private alertController: AlertController
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.load();
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
  }

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Loading...',
    });
    await this.loading.present();

    try {
      const res = await fetch(this.dataUrl);

      if (!res.ok) {
        throw new Error('Помилка завантаження даних: ' + res.status);
      }

      const json = await res.json();
      console.log('Отримані дані:', json.record.sales[0].data);

      if (!json.record.sales) {
        throw new Error('Невірний формат JSON: відсутній об’єкт sales');
      }

      let data = json.record.sales;
      data.forEach((item: any) => {
        if (
          item.hasOwnProperty('date') &&
          item.hasOwnProperty('productCount')
        ) {
          this.salesList.addSale(
            new Sale(
              item.date,
              item.productCount,
              item.paidAmount,
              item.creditAmount
            )
          );
        } else {
          throw new Error('Недостатньо даних для кожного елементу');
        }
      });

      this.lineChartMethod();
    } catch (error: any) {
      this.presentAlert('Помилка: ' + error.message);
      console.log('Помилка:', error);
    } finally {
      this.loading.dismiss();
    }
  }

  groupedSales: any[] = [];

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    this.groupedSales = this.salesList.groupByWeek();

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: this.groupedSales.map((data) => data.weekStart),
        datasets: [
          {
            label: 'Продажі за тиждень',
            borderColor: 'rgba(75,192,192,1)',
            data: this.groupedSales.map((data) => data.totalSales),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
          },
        ],
      },
    });
  }
}
