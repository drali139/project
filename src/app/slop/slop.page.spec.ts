import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlopPage } from './slop.page';

describe('SlopPage', () => {
  let component: SlopPage;
  let fixture: ComponentFixture<SlopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
