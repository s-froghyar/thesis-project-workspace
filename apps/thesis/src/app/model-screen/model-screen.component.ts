import { Component, OnInit } from '@angular/core';
import { ColorHarmony } from '@somaf-ws/color-harmonies';
import { ColorPaletteService } from '../core/color-palette.service';

@Component({
  selector: 'somaf-ws-model-screen',
  templateUrl: './model-screen.component.html',
  styleUrls: ['./model-screen.component.scss']
})
export class ModelScreenComponent implements OnInit {
  colorHarmony!: ColorHarmony;
  bgColors!: any;

  constructor(public readonly colors: ColorPaletteService) { }

  ngOnInit(): void {
    this.colorHarmony = this.colors.getColorHarmony('tetradic') as ColorHarmony;
    // console.log(this.colorHarmony);
    this.bgColors = {
      input: this.colors.radGradTransform(this.colorHarmony, 'base'),
      conv1: this.colors.radGradTransform(this.colorHarmony, 'secondary'),
      conv2: this.colors.radGradTransform(this.colorHarmony, 'tertiary',),
      fc: this.colors.radGradTransform(this.colorHarmony, 'fourth'),
      // input: this.colors.linGradTransform(this.colorHarmony, 'base', 'secondary'),
      // conv1: this.colors.linGradTransform(this.colorHarmony, 'secondary', 'tertiary'),
      // conv2: this.colors.linGradTransform(this.colorHarmony, 'tertiary', 'fourth'),
      // fc: this.colors.linGradTransform(this.colorHarmony, 'fourth', 'base'),
    }    
  }

}
