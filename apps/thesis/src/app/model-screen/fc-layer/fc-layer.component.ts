import { Component, Input, OnInit } from '@angular/core';
import { Neuron } from '@somaf-ws/utils';

@Component({
  selector: 'somaf-ws-fc-layer',
  templateUrl: './fc-layer.component.html',
  styleUrls: ['./fc-layer.component.scss']
})
export class FcLayerComponent implements OnInit {
  @Input() neurons!: Neuron[];
  @Input() isCollapsed!: boolean;


  ngOnInit(): void {
    // console.log(this.neurons);
  }

}
