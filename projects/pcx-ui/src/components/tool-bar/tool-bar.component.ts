import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'pcx-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class PcxToolBarComponent {
  @Input('title')
  titleApp: string = '';

  @Output() menuButton: EventEmitter<any> = new EventEmitter<any>();

  clickMenu() {
    this.menuButton.emit(true);
  }

  constructor() {}
}
