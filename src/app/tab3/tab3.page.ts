import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  n: number = 0;
  matrix: number[][] = [];
  oddRowSums: number[] = [];

  generateMatrix() {
    this.matrix = [];
    this.oddRowSums = [];

    for (let i = 0; i < this.n; i++) {
      let row: number[] = [];
      let sum = 0;
      for (let j = 0; j < this.n; j++) {
        let num = Math.floor(Math.random() * 50) + 1;
        row.push(num);
        if (i % 2 !== 0) sum += num;
      }
      this.matrix.push(row);
      this.oddRowSums.push(i % 2 !== 0 ? sum : 0);
    }
  }

  isHighlighted(index: number): boolean {
    return this.oddRowSums[index] > 100;
  }
}
