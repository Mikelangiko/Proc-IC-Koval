import { Dessert } from './Dessert';

describe('Dessert', () => {
  let dessert: Dessert;

  beforeEach(() => {
    dessert = new Dessert(1, 'Шоколадний торт', 120, 25, true);
  });

  it('should create an instance of Dessert', () => {
    expect(dessert).toBeTruthy();
  });

  it('should return correct sugarGrams', () => {
    expect(dessert.getSugarGrams()).toBe(25);
  });

  it('should return correct isVegan value', () => {
    expect(dessert.getisVegan()).toBeTrue();
  });

  it('should return correct details', () => {
    expect(dessert.getDetails()).toEqual(['Цукор: 25 г', 'Без глютену: Так']);
  });

  it('should return correct category', () => {
    expect(dessert.getCategory()).toBe('Dessert');
  });

  it('should throw error if sugarGrams < 0', () => {
    expect(() => new Dessert(2, 'Морозиво', 100, -5, false)).toThrowError(
      'sugarGrams < 0'
    );
  });

  it('should return "Ні" for non-vegan dessert in details', () => {
    const nonVeganDessert = new Dessert(3, 'Тірамісу', 130, 20, false);
    expect(nonVeganDessert.getDetails()).toEqual([
      'Цукор: 20 г',
      'Без глютену: Ні',
    ]);
  });
});
