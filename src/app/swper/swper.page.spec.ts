import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwperPage } from './swper.page';

describe('SwperPage', () => {
  let component: SwperPage;
  let fixture: ComponentFixture<SwperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SwperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
