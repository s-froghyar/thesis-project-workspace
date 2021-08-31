import { Injectable } from '@angular/core';
import { colorHarmonies, colorHarmoniesWithBase, ColorHarmony } from '@somaf-ws/color-harmonies';

@Injectable({
  providedIn: 'root'
})
export class ColorPaletteService {
  private _colors!: ColorHarmony;

  public get colors(): ColorHarmony {
    return this._colors;
  }
  public set colors(c: ColorHarmony) {
    this._colors = c;
  }

  private _leftBg= '';
  private _rightBg = '';

  public get rightBg(): string {
    return this._rightBg;
  }
  set rightBg(c: string) {
    this._rightBg = c;
  }

  public get leftBg(): string {
    return this._leftBg;
  }
  set leftBg(c: string) {
    this._leftBg = c;
  }
  

  

  constructor() {
    this.colors = colorHarmonies('analogous');
    this.leftBg = this.linGradTransform(this.colors, 'secondary', 'base');   
    this.rightBg = this.linGradTransform(this.colors, 'base', 'tertiary');
  }

  public linGradTransform(ch: ColorHarmony, from: string, to: string): string {
    return `linear-gradient(90deg, hsl(${ch[from].hue}, ${ch[from].saturation}%, ${ch[from].light}%) 0%, hsl(${ch[to].hue}, ${ch[to].saturation}%, ${ch[to].light}%) 100%)`
  }

  public getColorString(type: string): string {
    return `hsl(${this._colors[type].hue}, ${this._colors[type].saturation}%, ${this._colors[type].light}%)`
  }

  public getColorHarmony(hType: string): ColorHarmony {
    return colorHarmoniesWithBase(hType, this.colors.base);
  }
}


