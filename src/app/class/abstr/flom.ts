import { PaintTool } from './abstr3';
export class Marker extends PaintTool {
  tipSize: number;

  constructor(type: string, color: string, length: number, tipSize: number) {
    super(type, color, length);
    if (length <= 0) {
      throw new Error('Довжина повинна бути більше 0');
    }
    if (tipSize <= 0) {
      throw new Error('Розмір наконечника має бути більше 0');
    }
    this.tipSize = tipSize;
  }

  override displayInfo(): string {
    return `${super.displayInfo()}, Розмір наконечника: ${this.tipSize.toFixed(
      2
    )}`;
  }
}
