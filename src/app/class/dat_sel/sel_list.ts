import { Sale } from './sel';

export class SalesList {
  sales: Sale[] = [];

  addSale(sale: Sale) {
    this.sales.push(sale);
  }

  private parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  groupByWeek(): { weekStart: string; totalSales: number }[] {
    const salesByWeek: { [key: string]: number } = {};

    this.sales.forEach((sale) => {
      const date = this.parseDate(sale.date);
      date.setDate(date.getDate() - date.getDay() + 1);
      const weekStart = date.toISOString().split('T')[0];

      if (!salesByWeek[weekStart]) {
        salesByWeek[weekStart] = 0;
      }

      salesByWeek[weekStart] += sale.productCount;
    });

    return Object.entries(salesByWeek)
      .map(([weekStart, totalSales]) => ({ weekStart, totalSales }))
      .sort((a, b) => (a.weekStart > b.weekStart ? 1 : -1));
  }
}
