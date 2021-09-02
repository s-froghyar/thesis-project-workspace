import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ColorHarmony } from '@somaf-ws/color-harmonies';
import { ColorPaletteService } from '../../core/color-palette.service';

@Component({
  selector: 'somaf-ws-conv-layer',
  templateUrl: './conv-layer.component.html',
  styleUrls: ['./conv-layer.component.scss']
})
export class ConvLayerComponent implements OnInit {
  @Input() title!: string;
  @Input() bgColor!: string;

  // colorHarmony!: ColorHarmony;
  // bgColors!: any;

  chevDown = faChevronDown;
  constructor() { }


  ngOnInit(): void {
    // this.colorHarmony = this.colors.getColorHarmony('tetradic') as ColorHarmony;
    // this.bgColors = {
    //   input: this.colors.radGradTransform(this.colorHarmony, 'base'),
    //   conv1: this.colors.radGradTransform(this.colorHarmony, 'secondary'),
    //   conv2: this.colors.radGradTransform(this.colorHarmony, 'tertiary',),
    //   fc: this.colors.radGradTransform(this.colorHarmony, 'fourth'),
    // } 
  }

}
