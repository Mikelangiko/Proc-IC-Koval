import { Injectable } from '@angular/core';
import { LogService } from '../logs/log.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private xy = new Map<number, number>();

  constructor(private logService?: LogService) {}

  getTab(xn: number = 1, xk: number = 1, h: number = 1): Map<number, number> {
    let x = xn;
    this.xy.clear();

    while (x <= xk) {
      let expValue = Math.exp(x);
      let denominator = 1 + Math.pow(x, 2);
      let y = expValue / denominator;
      this.xy.set(x, y);

      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)} y=${y.toFixed(6)}`);
      }

      x += h;
    }

    return this.xy;
  }
}
