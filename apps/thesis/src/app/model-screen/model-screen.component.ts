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
    this.bgColors = {
      bl: {
        input: this.colors.radGradTransform(this.colorHarmony, 'base'),
        conv1: this.colors.radGradTransform(this.colorHarmony, 'secondary'),
        conv2: this.colors.radGradTransform(this.colorHarmony, 'tertiary',),
        fc: this.colors.radGradTransform(this.colorHarmony, 'fourth'),
      },
      tr: {
        input: this.colors.radGradTransform(this.colorHarmony, 'base', true),
        conv1: this.colors.radGradTransform(this.colorHarmony, 'secondary', true),
        conv2: this.colors.radGradTransform(this.colorHarmony, 'tertiary', true),
        fc: this.colors.radGradTransform(this.colorHarmony, 'fourth', true),
      }
      
    }    
  }

}
