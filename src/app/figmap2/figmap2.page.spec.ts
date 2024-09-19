import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Figmap2Page } from './figmap2.page';

describe('Figmap2Page', () => {
  let component: Figmap2Page;
  let fixture: ComponentFixture<Figmap2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Figmap2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
