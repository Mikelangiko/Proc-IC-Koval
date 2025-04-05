import { clas_do } from './clasify';
import { Pencil } from './oliv';
import { Marker } from './flom';
import { Brush } from './brush';

describe('Тестування класу PaintFactory', () => {
  it('Створення олівця', () => {
    const pencil = clas_do.getPaint('Pencil', 'black', 10, 'low');
    expect(pencil).toBeTruthy();
    expect(pencil instanceof Pencil).toBe(true);
  });

  it('Створення маркера', () => {
    const marker = clas_do.getPaint('Marker', 'red', 12, 3);
    expect(marker).toBeTruthy();
    expect(marker instanceof Marker).toBe(true);
  });

  it('Створення пензля', () => {
    const brush = clas_do.getPaint('Brush', 'blue', 15, 5);
    expect(brush).toBeTruthy();
    expect(brush instanceof Brush).toBe(true);
  });
});
