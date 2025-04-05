import { FoodItem } from './FoodItem';

export class ReadyMeal extends FoodItem {
  private ingredients: string[];
  private calories: number;

  constructor(
    id: number,
    name: string,
    price: number,
    ingredients: string[],
    calories: number
  ) {
    super(id, name, price);
    if (calories <= 0) throw new Error('calories <= 0');
    this.ingredients = ingredients;
    this.calories = calories;
  }

  getIngredients(): string[] {
    return this.ingredients;
  }

  getCalories(): number {
    return this.calories;
  }

  override getDetails(): string[] {
    return [
      'Інгредієнти: ' + this.ingredients.join(', '),
      'Калорійність: ' + this.calories + ' ккал',
    ];
  }

  override getCategory(): string {
    return 'ReadyMeal';
  }
}
