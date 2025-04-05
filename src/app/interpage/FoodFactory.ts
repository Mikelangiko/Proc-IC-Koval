import { foodTypes } from './foodtype';
import { IFoodItem } from './interfooditem';
import { ReadyMeal } from './ReadyMeal';
import { Drink } from './Drink';
import { Dessert } from './Dessert';
import { Sauce } from './Sauce';

export class FoodFactory {
  static createFood(data: any): IFoodItem {
    switch (data.type) {
      case foodTypes[0]:
        return new ReadyMeal(
          data.id,
          data.name,
          data.price,
          data.ingredients,
          data.calories
        );

      case foodTypes[1]:
        return new Drink(
          data.id,
          data.name,
          data.price,
          data.volume,
          data.isCarbonated,
          data.size
        );

      case foodTypes[2]:
        return new Dessert(
          data.id,
          data.name,
          data.price,
          data.sugarGrams,
          data.isVegan
        );

      case foodTypes[3]:
        return new Sauce(
          data.id,
          data.name,
          data.price,
          data.isSpicy,
          data.volume
        );

      default:
        throw new Error(`Unknown food type: ${data.type}`);
    }
  }
}
