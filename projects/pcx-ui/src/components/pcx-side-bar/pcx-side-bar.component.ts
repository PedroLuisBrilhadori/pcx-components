import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PcxSideBarButton } from './models';

@Component({
  selector: 'pcx-side-bar',
  templateUrl: './pcx-side-bar.component.html',
  styleUrls: ['../../util/tailwind.scss', './pcx-side-bar.component.scss'],
})
export class PcxSideBarComponent implements OnInit {
  @Input('buttons')
  buttons: PcxSideBarButton[] = [];

  @Output() routes: EventEmitter<any> = new EventEmitter<any>();

  go(route: string): void {
    this.routes.emit(route);
  }

  constructor() {}

  ngOnInit(): void {}
}
