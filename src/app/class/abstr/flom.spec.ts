import { Marker } from './flom';

describe('Тестування класу Marker', () => {
  let marker: Marker;

  beforeEach(() => {
    marker = new Marker('Marker', 'red', 12, 3);
  });

  it('Екземпляр класу Marker створено', () => {
    expect(marker).toBeTruthy();
    expect(marker instanceof Marker).toBe(true);
  });

  it('Коректний виклик displayInfo', () => {
    expect(marker.displayInfo()).toContain('Розмір наконечника: 3.00');
  });

  it('Створення з некоректним розміром наконечника', () => {
    expect(() => new Marker('Marker', 'red', 12, -1)).toThrowError(
      'Розмір наконечника має бути більше 0'
    );
  });
});
