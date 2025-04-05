import { FoodItem } from './FoodItem';

export class Sauce extends FoodItem {
  private isSpicy: boolean;
  private volume: number; // в мілілітрах

  constructor(
    id: number,
    name: string,
    price: number,
    isSpicy: boolean,
    volume: number
  ) {
    super(id, name, price);
    if (volume <= 0) throw new Error('volume <= 0');
    this.isSpicy = isSpicy;
    this.volume = volume;
  }

  getIsSpicy(): boolean {
    return this.isSpicy;
  }

  getVolume(): number {
    return this.volume;
  }

  override getDetails(): string[] {
    return [
      'Гострий: ' + (this.isSpicy ? 'Так' : 'Ні'),
      'Обʼєм: ' + this.volume + ' мл',
    ];
  }

  override getCategory(): string {
    return 'Sauce';
  }
}
