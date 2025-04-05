import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClodPage } from './clod.page';

describe('ClodPage', () => {
  let component: ClodPage;
  let fixture: ComponentFixture<ClodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
