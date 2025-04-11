import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFactory } from '../forms/form-factory';
import { foodTypes } from '../interpage/foodtype';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { IonicModule } from '@ionic/angular'; // Ionic module for ion-select

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonModal,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonToggle,
} from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.scss'],
  standalone: true,
  imports: [
    IonToggle,
    IonModal,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AddFoodFormComponent {
  @Input() showModal = false;
  @Output() showModalChange = new EventEmitter<boolean>();
  @Output() formSubmitted = new EventEmitter<any>();

  form!: FormGroup;
  foodTypes = foodTypes;
  selectedType = foodTypes[0]; // default

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = FormFactory.createForm(this.fb, this.selectedType);
  }

  onTypeChange(): void {
    const type = this.form.get('type')?.value;
    if (type && this.foodTypes.includes(type)) {
      this.selectedType = type;
      this.form = FormFactory.createForm(this.fb, this.selectedType);
    }
  }

  submitForm(): void {
    if (this.form.valid) {
      const raw = this.form.value;

      const data: any = {
        id: raw.id,
        name: raw.name,
        price: raw.price,
        type: raw.type,
      };

      switch (raw.type) {
        case 'ReadyMeal':
          data.ingredients = raw.ingredients;
          data.calories = raw.calories;
          break;
        case 'Drink':
          data.volume = raw.volume;
          data.isCarbonated = raw.isCarbonated;
          data.size = raw.size;
          break;
        case 'Dessert':
          data.sugarGrams = raw.sugarGrams;
          data.isVegan = raw.isVegan;
          break;
        case 'Sauce':
          data.isSpicy = raw.isSpicy;
          data.volume = raw.volume;
          break;
      }

      this.formSubmitted.emit(data);
      this.closeModal();
    } else {
      this.form.markAllAsTouched();
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.showModalChange.emit(false);
  }
}
