import { Injectable } from '@angular/core';
import { colorHarmonies, ColorHarmony } from '@somaf-ws/color-harmonies';

@Injectable({
  providedIn: 'root'
})
export class ColorPaletteService {
  public colors: ColorHarmony;

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
    this.leftBg = `linear-gradient(90deg, hsl(${
        this.colors.secondary.hue
      }, ${this.colors.secondary.saturation
      }%, ${
        this.colors.secondary.light
      }%) 0%, hsl(${this.colors.base.hue}, ${
        this.colors.base.saturation
      }%, ${
        this.colors.base.light
      }%) 100%)`;

    this.rightBg = `linear-gradient(90deg, hsl(${
        this.colors.base.hue
      }, ${this.colors.base.saturation
      }%, ${
        this.colors.base.light
      }%) 0%, hsl(${this.colors?.tertiary?.hue}, ${
        this.colors?.tertiary?.saturation
      }%, ${
        this.colors?.tertiary?.light
      }%) 100%)`;
  }
}
