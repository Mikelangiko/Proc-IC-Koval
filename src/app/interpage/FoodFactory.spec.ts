import { FoodFactory } from './FoodFactory';
import { foodTypes } from './foodtype';
import { ReadyMeal } from './ReadyMeal';
import { Drink } from './Drink';
import { Dessert } from './Dessert';
import { Sauce } from './Sauce';
import { IFoodItem } from './interfooditem';

describe('FoodFactory', () => {
  it('should create a ReadyMeal instance', () => {
    const data = {
      type: foodTypes[0],
      id: 1,
      name: 'Паста Болоньєзе',
      price: 120,
      ingredients: ['макарони', 'мʼясо', 'соус'],
      calories: 600,
    };

    const item: IFoodItem = FoodFactory.createFood(data);
    expect(item instanceof ReadyMeal).toBeTrue();
    expect(item.getName()).toBe('Паста Болоньєзе');
  });

  it('should create a Drink instance', () => {
    const data = {
      type: foodTypes[1],
      id: 2,
      name: 'Лимонад',
      price: 50,
      volume: 330,
      isCarbonated: true,
      size: 'medium',
    };

    const item: IFoodItem = FoodFactory.createFood(data);
    expect(item instanceof Drink).toBeTrue();
    expect(item.getCategory()).toBe('Drink');
  });

  it('should create a Dessert instance', () => {
    const data = {
      type: foodTypes[2],
      id: 3,
      name: 'Чізкейк',
      price: 90,
      sugarGrams: 35,
      isVegan: false,
    };

    const item: IFoodItem = FoodFactory.createFood(data);
    expect(item instanceof Dessert).toBeTrue();
    expect(item.getCategory()).toBe('Dessert');
  });

  it('should create a Sauce instance', () => {
    const data = {
      type: foodTypes[3],
      id: 4,
      name: 'BBQ соус',
      price: 25,
      isSpicy: false,
      volume: 40,
    };

    const item: IFoodItem = FoodFactory.createFood(data);
    expect(item instanceof Sauce).toBeTrue();
    expect(item.getCategory()).toBe('Sauce');
  });

  it('should throw error for unknown food type', () => {
    const data = {
      type: 'unknown_type',
      id: 5,
      name: 'Щось дивне',
      price: 10,
    };

    expect(() => FoodFactory.createFood(data)).toThrowError(
      'Unknown food type: unknown_type'
    );
  });
});
