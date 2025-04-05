import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TabService } from '../serv_page/tab/tab.service';
import { RecursService } from '../serv_page/recurs/recurs.service';
import { ServService } from '../serv_page/serv/serv.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: false,
})
export class Tab5Page implements OnInit {
  xyInput: string[] = [];
  xx: number[] = [];
  yyTab: number[] = [];
  xySeries = new Map<number, number>();
  xyRecursion = new Map<number, number>();
  chart!: Chart;

  @ViewChild('myChart', { static: false }) myChart!: ElementRef;

  constructor(
    private tabService: TabService,
    private seriesService: ServService,
    private recursionService: RecursService
  ) {}

  ras(xn: any, xk: any, h: any) {
    try {
      let xn1 = parseFloat(xn),
        xk1 = parseFloat(xk),
        h1 = parseFloat(h);

      this.xx = [];
      this.yyTab = [];
      this.xyInput = [];

      console.log('Табулювання');
      let obj = this.tabService.getTab(xn1, xk1, h1);
      this.xx = Array.from(obj.keys());
      this.yyTab = Array.from(obj.values());

      console.log('Ряд');
      this.xySeries = this.seriesService.getTab(xn1, xk1, h1);

      console.log('Рекурсія');
      this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);

      this.input();
      this.createChart();
    } catch (error) {
      console.error('Помилка при обчисленні:', error);
    }
  }

  input() {
    this.xyInput = [];

    this.xx.forEach((value, index) => {
      let row = '';
      let y: number | undefined = this.yyTab[index];

      row += y !== undefined ? y.toFixed(4) + ' ' : 'NaN ';

      y = this.xySeries.get(value);
      row += y !== undefined ? y.toFixed(4) + ' ' : 'NaN ';

      y = this.xyRecursion.get(value);
      row += y !== undefined ? y.toFixed(4) : 'NaN';

      console.log(row);
      this.xyInput.push(row);
    });
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    setTimeout(() => {
      const ctx = this.myChart.nativeElement.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.xx,
          datasets: [
            {
              label: 'Табуляція',
              data: this.yyTab,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: 'Ряд',
              data: this.xx.map((x) => this.xySeries.get(x) ?? NaN),
              borderColor: 'red',
              fill: false,
            },
            {
              label: 'Рекурсія',
              data: this.xx.map((x) => this.xyRecursion.get(x) ?? NaN),
              borderColor: 'green',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }, 100);
  }

  ngOnInit() {}
}
