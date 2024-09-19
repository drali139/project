import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Figmap1Page } from './figmap1.page';

describe('Figmap1Page', () => {
  let component: Figmap1Page;
  let fixture: ComponentFixture<Figmap1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Figmap1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
