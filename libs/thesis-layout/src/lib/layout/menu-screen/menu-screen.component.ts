import { Component, OnInit } from '@angular/core';
import { ITab, TabType } from '../interfaces/tabs.interface';

@Component({
  selector: 'somaf-ws-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.scss']
})
export class MenuScreenComponent {
  tabs: ITab[] = [
    { title: 'About this', selected: true, type: 'about'},
    { title: 'Baseline model', selected: false, type: 'baseline'},
    { title: 'Tangent propagation', selected: false, type: 'tp'},
    { title: 'Augerino', selected: false, type: 'augerino'},
    { title: 'Augmentations', selected: false, type: 'augs'}
  ];
  selectedTab: TabType = 'about';

  makeActive(ind: number): void {
    for (let i=0; i < this.tabs.length; i++) {
      if (i === ind) {
        this.tabs[i].selected = true;
        this.selectedTab = this.tabs[i].type;
      } else {
        this.tabs[i].selected = false;
      }
    }    
  }
}
