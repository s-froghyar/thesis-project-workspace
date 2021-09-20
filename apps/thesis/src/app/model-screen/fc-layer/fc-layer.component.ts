import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'somaf-ws-fc-layer',
  templateUrl: './fc-layer.component.html',
  styleUrls: ['./fc-layer.component.scss']
})
export class FcLayerComponent implements OnInit {
  @Input() neurons;


  ngOnInit(): void {
  }

}
