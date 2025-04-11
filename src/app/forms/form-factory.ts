import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { foodTypes } from '../interpage/foodtype';
import { idValidator } from '../valid/id.validator';
import { nameValidator } from '../valid/name.validator';

export class FormFactory {
  static createForm(fb: FormBuilder, type: string): FormGroup {
    switch (type) {
      case foodTypes[0]: // ReadyMeal
        return fb.group({
          id: ['', [Validators.required, idValidator()]],
          type: [type],
          name: ['', [Validators.required, nameValidator()]],
          price: [0, [Validators.required, Validators.min(0)]],
          ingredients: ['', Validators.required],
          calories: [0, [Validators.required, Validators.min(0)]],
        });

      case foodTypes[1]: // Drink
        return fb.group({
          id: ['', [Validators.required, idValidator()]],
          type: [type],
          name: ['', [Validators.required, nameValidator()]],
          price: [0, [Validators.required, Validators.min(0)]],
          volume: [0, [Validators.required, Validators.min(0)]],
          isCarbonated: [false],
          size: ['', Validators.required],
        });

      case foodTypes[2]: // Dessert
        return fb.group({
          id: ['', [Validators.required, idValidator()]],
          type: [type],
          name: ['', [Validators.required, nameValidator()]],
          price: [0, [Validators.required, Validators.min(0)]],
          sugarGrams: [0, [Validators.required, Validators.min(0)]],
          isVegan: [false],
        });

      case foodTypes[3]: // Sauce
        return fb.group({
          id: ['', [Validators.required, idValidator()]],
          type: [type],
          name: ['', [Validators.required, nameValidator()]],
          price: [0, [Validators.required, Validators.min(0)]],
          isSpicy: [false],
          volume: [0, [Validators.required, Validators.min(0)]],
        });

      default:
        throw new Error(`Unknown food type: ${type}`);
    }
  }
}
