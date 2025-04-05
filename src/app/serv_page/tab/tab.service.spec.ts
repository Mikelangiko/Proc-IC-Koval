import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Табулювання значення x=1 y=<очікуване значення>', () => {
    let x = 1;
    let expectedY = Math.exp(x) / (1 + Math.pow(x, 2));
    let xy = service.getTab();
    let y1 = xy.get(x);
    if (y1 !== undefined) {
      expect(expectedY.toFixed(4)).toBe(y1.toFixed(4));
    }
  });
});
