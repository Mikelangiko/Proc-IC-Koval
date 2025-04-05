import { TestBed } from '@angular/core/testing';

import { RecursService } from './recurs.service';

describe('RecursService', () => {
  let service: RecursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
