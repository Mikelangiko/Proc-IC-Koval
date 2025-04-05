import { FoodItem } from './FoodItem';

class TestFoodItem extends FoodItem {}

describe('FoodItem (abstract base)', () => {
  let foodItem: FoodItem;

  beforeEach(() => {
    foodItem = new TestFoodItem(1, 'Тестова страва', 100);
  });

  it('should create an instance of TestFoodItem', () => {
    expect(foodItem).toBeTruthy();
  });

  it('should return correct ID', () => {
    expect(foodItem.getID()).toBe(1);
  });

  it('should return correct name', () => {
    expect(foodItem.getName()).toBe('Тестова страва');
  });

  it('should return correct price', () => {
    expect(foodItem.getPrice()).toBe(100);
  });

  it('should return empty details by default', () => {
    expect(foodItem.getDetails()).toEqual([]);
  });

  it('should return default category', () => {
    expect(foodItem.getCategory()).toBe('FoodItem');
  });

  it('should throw error if id < 0', () => {
    expect(() => new TestFoodItem(-1, 'Invalid', 100)).toThrowError('id < 0');
  });

  it('should throw error if price < 1', () => {
    expect(() => new TestFoodItem(1, 'Invalid', 0)).toThrowError('price < 1');
  });
});
