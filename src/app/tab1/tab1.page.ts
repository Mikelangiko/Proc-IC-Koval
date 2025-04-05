import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  result: number | null = null;

  calculateSum() {
    const numbers = [this.num1, this.num2, this.num3].filter(
      (n) => n % 5 === 0
    );
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    this.result = sum % 2 !== 0 ? sum : null;
  }
  constructor() {}
}
