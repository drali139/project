import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nike1Page } from './nike1.page';

describe('Nike1Page', () => {
  let component: Nike1Page;
  let fixture: ComponentFixture<Nike1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Nike1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
