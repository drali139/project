import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Coconut2Page } from './coconut-2.page';

describe('Coconut2Page', () => {
  let component: Coconut2Page;
  let fixture: ComponentFixture<Coconut2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Coconut2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
