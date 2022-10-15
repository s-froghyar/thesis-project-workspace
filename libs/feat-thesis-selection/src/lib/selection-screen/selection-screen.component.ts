import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'somaf-ws-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
