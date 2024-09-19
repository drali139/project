import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Figmap8CartPage } from './figmap8-cart.page';

describe('Figmap8CartPage', () => {
  let component: Figmap8CartPage;
  let fixture: ComponentFixture<Figmap8CartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Figmap8CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
