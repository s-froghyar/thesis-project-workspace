import { Component, OnInit } from '@angular/core';
import { modelOptions, sampleFiles, SettingOption, transformOptions } from '@somaf-ws/utils';
import { ColorPaletteService } from '../core/color-palette.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'somaf-ws-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss']
})
export class SelectionScreenComponent implements OnInit {
  fg: FormGroup = new FormGroup({
    sampleFile: new FormControl([null, Validators.required]),
    model: new FormControl([null, Validators.required]),
    transform: new FormControl([null, Validators.required])
  });

  musicOptions: SettingOption[] = sampleFiles;
  models: SettingOption[] = modelOptions;
  transforms: SettingOption[] = transformOptions;

  leftBg;
  rightBg;
  pageColor;
  constructor(
    public readonly colors: ColorPaletteService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const complColor = this.colors.getColorHarmony('split-complementary')?.secondary;
    if (complColor) {
      this.pageColor = `hsl(${complColor.hue}, ${complColor.saturation}%, ${complColor.light}%)`
    }
  }
  submit(): void {
    this.router.navigate(['model'], { state: {
        sampleFile: this.fg.controls['sampleFile'].value,
        model: this.fg.controls['model'].value,
        transform: this.fg.controls['transform'].value,
      }
    });
  }
}
