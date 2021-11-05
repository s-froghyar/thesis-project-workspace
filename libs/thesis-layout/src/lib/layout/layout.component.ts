import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MenuScreenComponent } from './menu-screen/menu-screen.component';
import { deviceType } from '@somaf-ws/utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'thesis-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  menuIcon = faBars;
  linkedInIcon = faLinkedin;
  githubIcon = faGithub;
  isMenuOpen = false;
  notMobile = deviceType() !== 'mobile';

  constructor(private readonly modal: BsModalService) {}
  ngOnInit(): void {
    if (!this.notMobile) {
      this.toggleMenu();
    }
  }
  toggleMenu(): void {
    const initialState = {
      isMobile: !this.notMobile,
    }
    this.modal.show(MenuScreenComponent, { 
      ...initialState,
      animated: true,
      class: 'menu-modal',
    });    
  }

}
