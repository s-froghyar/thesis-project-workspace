import { Component } from '@angular/core';
import { ITab, TabType } from './menu.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AugmentationsComponent } from './augmentations/augmentations.component';

@Component({
  selector: 'somaf-ws-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, AugmentationsComponent],
})
export class MenuScreenComponent {
  isMobile!: boolean;
  constructor(private readonly dialog: MatDialogRef<any>) {}
  tabs: ITab[] = [
    { title: 'About this', selected: true, type: 'about' },
    { title: 'Baseline model', selected: false, type: 'baseline' },
    { title: 'Tangent propagation', selected: false, type: 'tp' },
    { title: 'Augerino', selected: false, type: 'augerino' },
    { title: 'Augmentations', selected: false, type: 'augs' },
  ];
  selectedTab: TabType = 'about';
  // closeIcon = faTimes;
  makeActive(ind: number): void {
    for (let i = 0; i < this.tabs.length; i++) {
      if (i === ind) {
        this.tabs[i].selected = true;
        this.selectedTab = this.tabs[i].type;
      } else {
        this.tabs[i].selected = false;
      }
    }
  }
  closeMenu(): void {
    this.dialog.close();
  }
}
