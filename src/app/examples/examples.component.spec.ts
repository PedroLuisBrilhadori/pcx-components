import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcxExamplesComponent } from './examples.component';

describe('PcxPcxExamplesComponent', () => {
  let component: PcxExamplesComponent;
  let fixture: ComponentFixture<PcxExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcxExamplesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
