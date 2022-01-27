import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcxNotFoundComponent } from './pcx-not-found.component';

describe('PcxNotFoundComponent', () => {
  let component: PcxNotFoundComponent;
  let fixture: ComponentFixture<PcxNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcxNotFoundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcxNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
