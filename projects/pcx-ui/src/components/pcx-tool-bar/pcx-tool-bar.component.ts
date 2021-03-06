import { Component, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'pcx-tool-bar',
  templateUrl: './pcx-tool-bar.component.html',
  styleUrls: ['../../util/tailwind.scss', './pcx-tool-bar.component.scss'],
})
export class PcxToolBarComponent {
  @Input('title')
  titleApp: string = '';

  @Input('route')
  route: boolean = false;

  @Input('color')
  color: string = 'primary';

  @Input('toolBarTemplate')
  toolBarTemplate: TemplateRef<any>;

  @Output() menuButton: EventEmitter<any> = new EventEmitter<any>();

  clickMenu() {
    this.menuButton.emit(true);
  }

  constructor() {}
}
