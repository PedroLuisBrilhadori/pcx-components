import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcxSideBarComponent } from './side-bar.component';

describe('PcxSideBarComponent', () => {
  let component: PcxSideBarComponent;
  let fixture: ComponentFixture<PcxSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcxSideBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcxSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
