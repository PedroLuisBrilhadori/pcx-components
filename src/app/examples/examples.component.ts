import { Component, OnInit, ViewChild } from '@angular/core';
import { PcxColumnsTableModel, PcxSideBarButton } from 'projects/pcx-ui';
import { components, Components } from './components';

@Component({
  selector: 'pcx-examples',
  templateUrl: 'examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class PcxExamplesComponent implements OnInit {
  route: string;

  buttonsSideBar: PcxSideBarButton[] = [];

  log(event: any) {
    console.log(event);
  }

  constructor() {}

  ngOnInit(): void {
    components.forEach((component) => {
      this.buttonsSideBar.push(this._createComponentButton(component));
    });
  }

  private _createComponentButton(component: Components): PcxSideBarButton {
    return {
      name: component.name,
      route: '',
    };
  }
}
