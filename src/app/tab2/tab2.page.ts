import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  a: number = 0;
  b: number = 0;
  result: number | null = null;

  calculateProduct() {
    let numbers = [];
    for (let i = this.a; i <= this.b; i++) {
      if (i % 10 === 0) {
        numbers.push(i);
      }
    }

    if (numbers.length % 2 === 0 && numbers.length > 0) {
      this.result = numbers.reduce((acc, num) => acc * num, 1);
    } else {
      this.result = null;
    }
  }
  constructor() {}
}
