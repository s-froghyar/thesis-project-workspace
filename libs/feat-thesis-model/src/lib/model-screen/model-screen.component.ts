import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'somaf-ws-model-screen',
  templateUrl: './model-screen.component.html',
  styleUrls: ['./model-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
