import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PractsPage } from './practs.page';

describe('PractsPage', () => {
  let component: PractsPage;
  let fixture: ComponentFixture<PractsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
