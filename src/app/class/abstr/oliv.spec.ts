import { Pencil } from './oliv';

describe('Тестування класу Pencil', () => {
  let pencil: Pencil;

  beforeEach(() => {
    pencil = new Pencil('Pencil', 'black', 10, 'HB');
  });

  it('Екземпляр класу Pencil створено', () => {
    expect(pencil).toBeTruthy();
    expect(pencil instanceof Pencil).toBe(true);
  });

  it('Коректний виклик displayInfo', () => {
    expect(pencil.displayInfo()).toContain('Твердість: HB');
  });

  it('Створення з некоректною довжиною', () => {
    expect(() => new Pencil('Pencil', 'black', -5, 'low')).toThrowError(
      'Довжина має бути більше 0'
    );
  });
});
