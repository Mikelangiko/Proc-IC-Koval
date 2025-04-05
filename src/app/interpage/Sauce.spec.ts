import { Sauce } from './Sauce';

describe('Sauce', () => {
  let sauce: Sauce;

  beforeEach(() => {
    sauce = new Sauce(1, 'Чилі соус', 20, true, 50);
  });

  it('should create an instance of Sauce', () => {
    expect(sauce).toBeTruthy();
  });

  it('should return correct isSpicy value', () => {
    expect(sauce.getIsSpicy()).toBeTrue();
  });

  it('should return correct volume', () => {
    expect(sauce.getVolume()).toBe(50);
  });

  it('should return correct details for spicy sauce', () => {
    expect(sauce.getDetails()).toEqual(['Гострий: Так', 'Обʼєм: 50 мл']);
  });

  it('should return correct category', () => {
    expect(sauce.getCategory()).toBe('Sauce');
  });

  it('should throw error if volume <= 0', () => {
    expect(() => new Sauce(2, 'Кетчуп', 15, false, 0)).toThrowError(
      'volume <= 0'
    );
    expect(() => new Sauce(3, 'Майонез', 18, false, -10)).toThrowError(
      'volume <= 0'
    );
  });

  it('should return correct details for non-spicy sauce', () => {
    const mildSauce = new Sauce(4, 'Тартар', 25, false, 30);
    expect(mildSauce.getDetails()).toEqual(['Гострий: Ні', 'Обʼєм: 30 мл']);
  });
});
