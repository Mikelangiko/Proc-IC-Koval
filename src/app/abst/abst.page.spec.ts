import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstPage } from './abst.page';

describe('AbstPage', () => {
  let component: AbstPage;
  let fixture: ComponentFixture<AbstPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
