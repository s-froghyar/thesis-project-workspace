import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


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

  constructor() {}

  ngOnInit(): void {}

}
