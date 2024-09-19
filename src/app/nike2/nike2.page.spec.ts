import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nike2Page } from './nike2.page';

describe('Nike2Page', () => {
  let component: Nike2Page;
  let fixture: ComponentFixture<Nike2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Nike2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
