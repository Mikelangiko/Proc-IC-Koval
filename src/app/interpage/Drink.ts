import { FoodItem } from './FoodItem';

export type DrinkSize = 'small' | 'medium' | 'large';

export class Drink extends FoodItem {
  private volume: number; // у мл
  private isCarbonated: boolean;
  private size: DrinkSize;

  constructor(
    id: number,
    name: string,
    price: number,
    volume: number,
    isCarbonated: boolean,
    size: DrinkSize
  ) {
    super(id, name, price);
    if (volume <= 0) throw new Error('volume <= 0');
    this.volume = volume;
    this.isCarbonated = isCarbonated;
    this.size = size;
  }

  getVolume(): number {
    return this.volume;
  }

  getIsCarbonated(): boolean {
    return this.isCarbonated;
  }

  getSize(): DrinkSize {
    return this.size;
  }

  override getDetails(): string[] {
    return [
      'Обʼєм: ' + this.volume + ' мл',
      'Газований: ' + (this.isCarbonated ? 'Так' : 'Ні'),
      'Розмір: ' + this.size,
    ];
  }

  override getCategory(): string {
    return 'Drink';
  }
}
