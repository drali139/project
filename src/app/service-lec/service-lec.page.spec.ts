import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceLecPage } from './service-lec.page';

describe('ServiceLecPage', () => {
  let component: ServiceLecPage;
  let fixture: ComponentFixture<ServiceLecPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
