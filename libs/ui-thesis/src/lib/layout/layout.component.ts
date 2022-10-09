import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { deviceType } from '@somaf-ws/utils-thesis';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MenuScreenComponent } from '../menu-screen/menu-screen.component';

@Component({
  selector: 'somaf-ws-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  notMobile = deviceType() !== 'mobile';

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    if (!this.notMobile) {
      this.toggleMenu();
    }
  }

  toggleMenu(): void {
    const conf: MatDialogConfig = new MatDialogConfig();
    conf.data = {
      isMobile: !this.notMobile,
    };
    conf.panelClass = 'menu-modal';

    this.dialog.open(MenuScreenComponent, conf);
  }
}
