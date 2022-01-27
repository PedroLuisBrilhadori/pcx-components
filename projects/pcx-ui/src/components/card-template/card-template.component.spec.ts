import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcxCardTemplateComponent } from './card-template.component';

describe('PcxCardTemplateComponent', () => {
  let component: PcxCardTemplateComponent;
  let fixture: ComponentFixture<PcxCardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcxCardTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcxCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
