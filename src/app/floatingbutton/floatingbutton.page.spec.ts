import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingbuttonPage } from './floatingbutton.page';

describe('FloatingbuttonPage', () => {
  let component: FloatingbuttonPage;
  let fixture: ComponentFixture<FloatingbuttonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingbuttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
