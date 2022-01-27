import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideBarButton } from './models';

@Component({
  selector: 'pcx-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class PcxSideBarComponent implements OnInit {
  @Input('buttons')
  buttons: SideBarButton[] = [];

  @Output() routes: EventEmitter<any> = new EventEmitter<any>();

  go(route: string): void {
    this.routes.emit(route);
  }

  constructor() {}

  ngOnInit(): void {}
}
