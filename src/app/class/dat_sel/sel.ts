export class Sale {
  date: string;
  productCount: number;
  paidAmount: number;
  creditAmount: number;

  constructor(
    date: string,
    productCount: number,
    paidAmount: number,
    creditAmount: number
  ) {
    this.date = date;
    this.productCount = productCount;
    this.paidAmount = paidAmount;
    this.creditAmount = creditAmount;
  }
}
