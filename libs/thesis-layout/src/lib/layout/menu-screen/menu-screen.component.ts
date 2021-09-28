import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITab, TabType } from '@somaf-ws/utils';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'somaf-ws-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.scss']
})
export class MenuScreenComponent {
  constructor(private readonly modal: BsModalRef) {}
  tabs: ITab[] = [
    { title: 'About this', selected: true, type: 'about'},
    { title: 'Baseline model', selected: false, type: 'baseline'},
    { title: 'Tangent propagation', selected: false, type: 'tp'},
    { title: 'Augerino', selected: false, type: 'augerino'},
    { title: 'Augmentations', selected: false, type: 'augs'}
  ];
  selectedTab: TabType = 'about';
  closeIcon = faTimes;
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
  closeMenu(): void {
    this.modal.hide();
  }
}
