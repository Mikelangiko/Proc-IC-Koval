import { PaintTool } from './abstr3';
export class Brush extends PaintTool {
  bristleDensity: number;

  constructor(
    type: string,
    color: string,
    length: number,
    bristleDensity: number
  ) {
    super(type, color, length);
    if (bristleDensity <= 0) {
      throw new Error('Густота щетини має бути більше 0');
    }
    this.bristleDensity = bristleDensity;
  }

  override displayInfo(): string {
    return `${super.displayInfo()}, Густота щетини: ${this.bristleDensity.toFixed(
      2
    )}`;
  }
}
