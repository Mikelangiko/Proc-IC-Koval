export interface IFoodItem {
  getID(): number;
  getName(): string;
  getPrice(): number;
  getDetails(): string[];
  getCategory(): string;
}
