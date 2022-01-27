import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcxSideBarComponent } from './side-bar.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PcxSideBarComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  exports: [PcxSideBarComponent],
})
export class PcxSideBarModule {}
