import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplemodPage } from './samplemod.page';

describe('SamplemodPage', () => {
  let component: SamplemodPage;
  let fixture: ComponentFixture<SamplemodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplemodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
