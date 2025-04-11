import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FoodFactory } from '../interpage/FoodFactory';
import { IFoodItem } from '../interpage/interfooditem';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
  standalone: false,
})
export class Tab6Page implements OnInit {
  foodList: IFoodItem[] = [];
  dataUrl = 'https://api.jsonbin.io/v3/b/67f2f3aa8a456b796683b754';

  showModal = false;
  loading: any;

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadData();
  }

  // Відкрити модалку
  openModal() {
    this.showModal = true;
  }

  // Закрити модалку
  closeModal() {
    this.showModal = false;
  }

  // Коли форма відправлена — створюємо об'єкт і додаємо до списку
  handleFormSubmit(data: any) {
    const newItem = FoodFactory.createFood(data);
    this.foodList.push(newItem);
    this.closeModal();
  }

  // Завантаження даних з API
  async loadData() {
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Завантаження...',
    });
    await this.loading.present();

    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error('Помилка завантаження: ' + response.status);
      }

      const json = await response.json();
      const foodData = json.record.food;

      if (!Array.isArray(foodData)) {
        throw new Error('Невірний формат JSON: очікувався масив food');
      }

      this.foodList = foodData.map((item: any) => FoodFactory.createFood(item));
    } catch (error: any) {
      console.error('Помилка:', error);
      this.presentAlert(error.message || 'Невідома помилка');
    } finally {
      this.loading.dismiss();
    }
  }

  // Показати алерт у випадку помилки
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: message,
      buttons: ['Ок'],
    });
    await alert.present();
  }
}
