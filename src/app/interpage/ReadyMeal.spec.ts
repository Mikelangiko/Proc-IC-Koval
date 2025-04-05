import { ReadyMeal } from './ReadyMeal';

describe('ReadyMeal', () => {
  let meal: ReadyMeal;

  beforeEach(() => {
    meal = new ReadyMeal(1, 'Лазанья', 150, ['паста', 'мʼясо', 'сир'], 500);
  });

  it('should create an instance of ReadyMeal', () => {
    expect(meal).toBeTruthy();
  });

  it('should return correct ingredients', () => {
    expect(meal.getIngredients()).toEqual(['паста', 'мʼясо', 'сир']);
  });

  it('should return correct calories', () => {
    expect(meal.getCalories()).toBe(500);
  });

  it('should return correct details', () => {
    expect(meal.getDetails()).toEqual([
      'Інгредієнти: паста, мʼясо, сир',
      'Калорійність: 500 ккал',
    ]);
  });

  it('should return correct category', () => {
    expect(meal.getCategory()).toBe('ReadyMeal');
  });

  it('should throw error if calories <= 0', () => {
    expect(
      () => new ReadyMeal(2, 'Плов', 120, ['рис', 'мʼясо'], 0)
    ).toThrowError('calories <= 0');
    expect(
      () => new ReadyMeal(3, 'Борщ', 100, ['буряк', 'капуста'], -100)
    ).toThrowError('calories <= 0');
  });

  it('should handle empty ingredients list', () => {
    const emptyMeal = new ReadyMeal(4, 'Таємна страва', 99, [], 300);
    expect(emptyMeal.getDetails()).toEqual([
      'Інгредієнти: ',
      'Калорійність: 300 ккал',
    ]);
  });
});
