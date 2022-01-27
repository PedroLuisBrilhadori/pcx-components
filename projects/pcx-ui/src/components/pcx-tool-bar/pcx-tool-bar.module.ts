import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { PcxToolBarComponent } from './pcx-tool-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PcxToolBarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
  exports: [PcxToolBarComponent],
})
export class PcxToolBarModule {}
