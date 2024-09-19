import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StylingmodalPage } from './stylingmodal.page';

describe('StylingmodalPage', () => {
  let component: StylingmodalPage;
  let fixture: ComponentFixture<StylingmodalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
