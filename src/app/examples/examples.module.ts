import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcxExamplesComponent } from './examples.component';
import { PcxSideBarModule, PcxToolBarModule } from 'projects/pcx-ui';

@NgModule({
  declarations: [PcxExamplesComponent],
  imports: [CommonModule, PcxSideBarModule, PcxToolBarModule],
  exports: [PcxExamplesComponent],
})
export class ExamplesModule {}
