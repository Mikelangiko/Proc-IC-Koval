import { PaintTool } from './abstr3';

export class Pencil extends PaintTool {
  hardness: string;

  constructor(type: string, color: string, length: number, hardness: string) {
    super(type, color, length);
    if (length <= 0) {
      throw new Error('Довжина повинна бути більше 0');
    }
    if (!hardness) {
      throw new Error('Твердість повинна бути визначена');
    }
    this.hardness = hardness;
  }

  override displayInfo(): string {
    return `${super.displayInfo()}, Твердість: ${this.hardness}`;
  }
}
