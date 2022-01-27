import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcxDrawerComponent } from './pcx-drawer.component';

describe('PcxDrawerComponent', () => {
  let component: PcxDrawerComponent;
  let fixture: ComponentFixture<PcxDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcxDrawerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcxDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
