import { Brush } from './brush';

describe('Тестування класу Brush', () => {
  let brush: Brush;

  beforeEach(() => {
    brush = new Brush('Brush', 'blue', 15, 5);
  });

  it('Екземпляр класу Brush створено', () => {
    expect(brush).toBeTruthy();
    expect(brush instanceof Brush).toBe(true);
  });

  it('Коректний виклик displayInfo', () => {
    expect(brush.displayInfo()).toContain('Густота щетини: 5.00');
  });

  it('Створення з некоректною густотою щетини', () => {
    expect(() => new Brush('Brush', 'blue', 15, -2)).toThrowError(
      'Густота щетини має бути більше 0'
    );
  });
});
