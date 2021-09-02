import { Injectable } from '@angular/core';
import { backUpHarmony, colorHarmonies, colorHarmoniesWithBase, ColorHarmony, HarmonyType } from '@somaf-ws/color-harmonies';

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
    this.colors = colorHarmonies('analogous') ?? backUpHarmony;
    this.leftBg = this.linGradTransform(this.colors, 'secondary', 'base');   
    this.rightBg = this.linGradTransform(this.colors, 'base', 'tertiary');
  }

  public linGradTransform(ch: ColorHarmony, from: string, to: string): string {
    return `linear-gradient(90deg, hsl(${ch[from].hue}, ${ch[from].saturation}%, ${ch[from].light}%) 0%, hsl(${ch[to].hue}, ${ch[to].saturation}%, ${ch[to].light}%) 100%)`
  }

  // ${ch[from].light} --> turned to 20% for a darker feel
  public radGradTransform(ch: ColorHarmony, from: string, invert = false): string {
    if (invert) {
      return `radial-gradient(farthest-corner at 100% 15%, hsl(${ch[from].hue}, ${ch[from].saturation}%, 20%) 0%, transparent 90%)`
    }
    return `radial-gradient(farthest-corner at 0% 85%, hsl(${ch[from].hue}, ${ch[from].saturation}%, 20%) 0%, transparent 90%)`
  }

  public getColorString(type: string): string {
    return `hsl(${this._colors[type].hue}, ${this._colors[type].saturation}%, ${this._colors[type].light}%)`
  }

  public getColorHarmony(hType: HarmonyType): ColorHarmony | null {
    return colorHarmoniesWithBase(hType, this.colors.base);
  }
}


