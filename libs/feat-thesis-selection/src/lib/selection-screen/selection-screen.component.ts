import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Self
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorPaletteService } from '@color-harmony';
import { S3Service } from '@somaf-ws/data-thesis';
import { SettingOption } from '@somaf-ws/types-thesis';
import {
  modelOptions,
  sampleFiles,
  transformOptions
} from '@somaf-ws/utils-thesis';

@Component({
  selector: 'somaf-ws-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ColorPaletteService],
})
export class SelectionScreenComponent implements OnInit {
  fg!: FormGroup;
  pageColor!: string;

  musicOptions: SettingOption[] = sampleFiles;
  models: SettingOption[] = modelOptions;
  transforms: SettingOption[] = transformOptions;

  constructor(
    @Self() public readonly colors: ColorPaletteService,
    private readonly s3: S3Service,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.fg = new FormGroup({
      sampleFile: new FormControl([null, Validators.required]),
      model: new FormControl([null, Validators.required]),
      transform: new FormControl([null, Validators.required]),
    });

    const complColor = this.colors.getColorHarmony(
      'split-complementary'
    )?.secondary;
    if (complColor) {
      this.pageColor = `hsl(${complColor.hue}, ${complColor.saturation}%, ${complColor.light}%)`;
    }
  }
  submit(): void {
    this.s3.setModelChoices({
      sampleFile: this.fg.controls['sampleFile'].value,
      model: this.fg.controls['model'].value,
      transform: this.fg.controls['transform'].value,
    });
    this.router.navigate(['model']);
  }
}
