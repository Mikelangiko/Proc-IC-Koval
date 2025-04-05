import { Drink } from './Drink';

describe('Drink', () => {
  let drink: Drink;

  beforeEach(() => {
    drink = new Drink(1, 'Кола', 50, 330, true, 'medium');
  });

  it('should create an instance of Drink', () => {
    expect(drink).toBeTruthy();
  });

  it('should return correct volume', () => {
    expect(drink.getVolume()).toBe(330);
  });

  it('should return correct isCarbonated value', () => {
    expect(drink.getIsCarbonated()).toBeTrue();
  });

  it('should return correct size', () => {
    expect(drink.getSize()).toBe('medium');
  });

  it('should return correct details', () => {
    expect(drink.getDetails()).toEqual([
      'Обʼєм: 330 мл',
      'Газований: Так',
      'Розмір: medium',
    ]);
  });

  it('should return correct category', () => {
    expect(drink.getCategory()).toBe('Drink');
  });

  it('should throw error if volume <= 0', () => {
    expect(() => new Drink(2, 'Фанта', 45, 0, false, 'small')).toThrowError(
      'volume <= 0'
    );
    expect(() => new Drink(3, 'Спрайт', 40, -250, true, 'large')).toThrowError(
      'volume <= 0'
    );
  });

  it('should return "Ні" for non-carbonated drink in details', () => {
    const stillDrink = new Drink(4, 'Сік', 35, 250, false, 'small');
    expect(stillDrink.getDetails()).toEqual([
      'Обʼєм: 250 мл',
      'Газований: Ні',
      'Розмір: small',
    ]);
  });
});
