import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Coconut1Page } from './coconut1.page';

describe('Coconut1Page', () => {
  let component: Coconut1Page;
  let fixture: ComponentFixture<Coconut1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Coconut1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
