import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Self
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorPaletteService } from '@color-harmony';
import { SettingOption } from '@somaf-ws/types-thesis';
import { bringUpNextPanel } from '@somaf-ws/ui-thesis';
import {
  modelOptions,
  ModelSelectionService,
  sampleFiles,
  transformOptions
} from '@somaf-ws/utils-thesis';
import { take } from 'rxjs/operators';

@Component({
  selector: 'somaf-ws-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ColorPaletteService],
  animations: [bringUpNextPanel],
})
export class SelectionScreenComponent implements OnInit {
  fg: FormGroup = new FormGroup({
    sampleFile: new FormControl([null, Validators.required]),
    model: new FormControl([null, Validators.required]),
    transform: new FormControl([null, Validators.required]),
  });
  pageColor!: string;

  musicOptions: SettingOption[] = sampleFiles;
  models: SettingOption[] = modelOptions;
  transforms: SettingOption[] = transformOptions;

  constructor(
    @Self() public readonly colors: ColorPaletteService,
    private readonly modelSelection: ModelSelectionService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const complColor = this.colors.getColorHarmony(
      'split-complementary'
    )?.secondary;
    if (complColor) {
      this.pageColor = `hsl(${complColor.hue}, ${complColor.saturation}%, ${complColor.light}%)`;
    }
  }
  submit(): void {
    this.modelSelection
      .selectModel({
        sampleFile: this.fg.controls['sampleFile'].value,
        model: this.fg.controls['model'].value,
        transform: this.fg.controls['transform'].value,
      })
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['model']);
      });
  }
}
