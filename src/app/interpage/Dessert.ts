import { FoodItem } from './FoodItem';

export class Dessert extends FoodItem {
  private sugarGrams: number;
  private isVegan: boolean;

  constructor(
    id: number,
    name: string,
    price: number,
    sugarGrams: number,
    isVegan: boolean
  ) {
    super(id, name, price);
    if (sugarGrams < 0) throw new Error('sugarGrams < 0');
    this.sugarGrams = sugarGrams;
    this.isVegan = isVegan;
  }

  getSugarGrams(): number {
    return this.sugarGrams;
  }

  getisVegan(): boolean {
    return this.isVegan;
  }

  override getDetails(): string[] {
    return [
      'Цукор: ' + this.sugarGrams + ' г',
      'Без глютену: ' + (this.isVegan ? 'Так' : 'Ні'),
    ];
  }

  override getCategory(): string {
    return 'Dessert';
  }
}
