import { Injectable } from '@angular/core';
import { LogService } from '../logs/log.service';

@Injectable({
  providedIn: 'root',
})
export class RecursService {
  private yy: number = 0;
  private xy = new Map<number, number>();

  constructor(private logService?: LogService) {}

  getRecursion(x: number, mem: number, n: number, sum: number): number {
    let min = 1e-12;
    mem = (mem * x) / n;
    sum += mem;
    n++;

    if (Math.abs(mem) > min) {
      return this.getRecursion(x, mem, n, sum);
    } else {
      return sum / (1 + x * x);
    }
  }

  getTab(
    xn: number = -3,
    xk: number = 3,
    h: number = 0.1
  ): Map<number, number> {
    let x = xn;
    this.xy.clear();

    while (x <= xk) {
      this.yy = this.getRecursion(x, 1, 1, 1);
      this.xy.set(x, this.yy);

      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)} y=${this.yy.toFixed(4)}`);
      }

      x += h;
    }

    return this.xy;
  }
}
