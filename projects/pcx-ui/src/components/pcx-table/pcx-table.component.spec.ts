import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PcxColumnsTableModel, TableModule } from '.';

import { PcxTableComponent } from './pcx-table.component';

const mockData = [
  { id: '1', teste: 'Pedro' },
  { id: '2', teste: 'Paulo' },
];

const mockEvent = { id: '1', teste: 'Pedro' };

const mockEvents = [
  { id: '1', teste: 'Pedro' },
  { id: '2', teste: 'Paulo' },
];

const mockColumns: PcxColumnsTableModel[] = [
  { name: 'id', displayedName: 'id', sort: false },
  { name: 'teste', displayedName: 'nome', sort: true },
];

describe('PcxTableComponent', () => {
  let component: PcxTableComponent;
  let fixture: ComponentFixture<PcxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcxTableComponent],
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        MatCheckboxModule,
        MatSortModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcxTableComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    component.displayedColumns = mockColumns;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have component Data', () => {
    expect(component.dataSource.data.length).toEqual(2);
    expect(component.columnsToDisplay.length).toEqual(mockColumns.length);
  });

  describe('SelectRow', () => {
    beforeEach(() => {
      spyOn(component.selection, 'toggle');
      spyOn(component.selected, 'emit');
    });

    it('should onoff checkboxes', () => {
      component.multiSelect = true;
      component.selectRow(mockEvent);
      expect(component.selection.toggle).toHaveBeenCalledWith(mockEvent);
      expect(component.selected.emit).toHaveBeenCalledWith(
        component.selection.selected
      );
    });
  });

  describe('CheckBoxes', () => {
    beforeEach(() => {
      component.multiSelect = true;
      spyOn(component, 'isAllSelected');
      spyOn(component, 'masterToggle');
      spyOn(component, 'checkboxLabel');
    });

    it('should toggle checkboxes', () => {
      expect(component.isAllSelected()).toBe(false);
      component.masterToggle();
      expect(component.isAllSelected()).toBe(true);
    });
  });
});
