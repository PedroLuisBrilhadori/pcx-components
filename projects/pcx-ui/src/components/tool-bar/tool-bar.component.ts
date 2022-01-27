import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'pcx-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['../../util/tailwind.scss', './tool-bar.component.scss'],
})
export class PcxToolBarComponent {
  @Input('title')
  titleApp: string = '';

  @Input('route')
  route: boolean = false;

  @Output() menuButton: EventEmitter<any> = new EventEmitter<any>();

  clickMenu() {
    this.menuButton.emit(true);
  }

  constructor() {}
}
