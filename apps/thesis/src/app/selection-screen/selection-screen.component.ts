import { Component, OnInit } from '@angular/core';
import { sampleFiles, SettingOption } from '@somaf-ws/utils';
import { colorHarmonies, ColorHarmony } from '@somaf-ws/color-harmonies';
import { ColorPaletteService } from '../core/color-palette.service';
@Component({
  selector: 'somaf-ws-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss']
})
export class SelectionScreenComponent implements OnInit {
  musicOptions: SettingOption[] = sampleFiles;
  selectedFile!: SettingOption;

  leftBg;
  rightBg;
  constructor(public readonly colors: ColorPaletteService) {}

  ngOnInit(): void {
    
  }
  selectFile(file: SettingOption): void {
    this.selectedFile = Object.assign({}, {...file, selected: true});
    this.musicOptions.forEach(f => {
      if (f.name === file.name) {
        f.selected = true;
      } else {
        f.selected = false;
      }
    });
  }

}
