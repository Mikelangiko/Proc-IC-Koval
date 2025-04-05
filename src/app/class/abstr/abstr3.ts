export abstract class PaintTool {
  type: string = '';
  color: string = '';
  length: number = 1;

  constructor(type: string, color: string, length: number) {
    if (length <= 0) {
      throw new Error('Довжина має бути більше 0');
    }
    this.type = type;
    this.color = color;
    this.length = length;
  }
  getLength(): number {
    return this.length;
  }
  displayInfo(): string {
    return `Тип: ${this.type}, Колір: ${
      this.color
    }, Довжина: ${this.length.toFixed(2)}`;
  }
}
