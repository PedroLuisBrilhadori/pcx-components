import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcxToolBarComponent } from './pcx-tool-bar.component';

describe('PcxToolBarComponent', () => {
  let component: PcxToolBarComponent;
  let fixture: ComponentFixture<PcxToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcxToolBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcxToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
