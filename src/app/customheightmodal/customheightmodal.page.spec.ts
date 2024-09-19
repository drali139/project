import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomheightmodalPage } from './customheightmodal.page';

describe('CustomheightmodalPage', () => {
  let component: CustomheightmodalPage;
  let fixture: ComponentFixture<CustomheightmodalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomheightmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
