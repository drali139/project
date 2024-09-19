import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertTaskPage } from './alert-task.page';

describe('AlertTaskPage', () => {
  let component: AlertTaskPage;
  let fixture: ComponentFixture<AlertTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
