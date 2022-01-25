import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcxUiComponent } from './pcx-ui.component';

describe('PcxUiComponent', () => {
  let component: PcxUiComponent;
  let fixture: ComponentFixture<PcxUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcxUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
