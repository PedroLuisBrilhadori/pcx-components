import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcxExamplesComponent } from './examples.component';
import {
  PcxSideBarModule,
  PcxTableModule,
  PcxToolBarModule,
} from 'projects/pcx-ui';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [PcxExamplesComponent],
  imports: [CommonModule, MatSidenavModule, PcxToolBarModule, PcxSideBarModule],
  exports: [PcxExamplesComponent],
})
export class ExamplesModule {}
