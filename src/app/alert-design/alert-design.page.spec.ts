import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertDesignPage } from './alert-design.page';

describe('AlertDesignPage', () => {
  let component: AlertDesignPage;
  let fixture: ComponentFixture<AlertDesignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
