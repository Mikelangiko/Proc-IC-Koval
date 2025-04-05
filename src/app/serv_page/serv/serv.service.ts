import { Injectable } from '@angular/core';
import { LogService } from '../logs/log.service';

@Injectable({
  providedIn: 'root',
})
export class ServService {
  private xy = new Map<number, number>();

  constructor(private logService?: LogService) {}

  getSeries(x: number): number {
    let sum: number = 1,
      term: number = 1;
    let n: number = 1,
      min: number = 1e-12;

    while (Math.abs(term) > min) {
      term *= x / n;
      sum += term;
      n++;
    }
    return sum / (1 + x * x);
  }

  getTab(
    xn: number = -3,
    xk: number = 3,
    h: number = 0.1
  ): Map<number, number> {
    let x = xn;
    this.xy.clear();

    while (x <= xk) {
      let y = this.getSeries(x);
      this.xy.set(x, y);

      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)} y=${y.toFixed(4)}`);
      }

      x += h;
    }
    return this.xy;
  }
}
