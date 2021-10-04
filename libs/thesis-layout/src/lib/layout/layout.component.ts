import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MenuScreenComponent } from './menu-screen/menu-screen.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'thesis-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  menuIcon = faBars;
  linkedInIcon = faLinkedin;
  githubIcon = faGithub;
  isMenuOpen = false;

  constructor(private readonly modal: BsModalService) {}

  toggleMenu(): void {
    this.modal.show(MenuScreenComponent, { 
      animated: true,
      class: 'menu-modal'
    });    
  }

}
