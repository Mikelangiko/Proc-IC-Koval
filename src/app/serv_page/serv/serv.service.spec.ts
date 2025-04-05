import { TestBed } from '@angular/core/testing';
import { ServService } from './serv.service';

describe('ServService', () => {
  let service: ServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Тест руду', () => {
    let x = 1.5;
    let y = 1.379;
    let y1 = service.getSeries(x);
    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });
});
