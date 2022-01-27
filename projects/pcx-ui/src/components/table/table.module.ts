import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcxTableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [PcxTableComponent],
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatSortModule],
  exports: [PcxTableComponent],
})
export class PcxTableModule {}
