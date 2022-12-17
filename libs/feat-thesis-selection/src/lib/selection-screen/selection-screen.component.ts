import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorPaletteService } from '@color-harmony';
import { SettingOption } from '@somaf-ws/types-thesis';
import { bringUpNextPanel } from '@somaf-ws/ui-thesis';
import {
  modelOptions,
  ModelSelectionService,
  sampleFiles,
  transformOptions,
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
export class SelectionScreenComponent {
  fg = new FormGroup({
    sampleFile: new FormControl<string | null>(null),
    customFile: new FormControl(null),
    model: new FormControl<string | null>(null, Validators.required),
    transform: new FormControl<string | null>(null, Validators.required),
  });

  musicOptions: SettingOption[] = sampleFiles;
  models: SettingOption[] = modelOptions;
  transforms: SettingOption[] = transformOptions;

  constructor(
    @Self() public readonly colors: ColorPaletteService,
    private readonly modelSelection: ModelSelectionService,
    private readonly router: Router
  ) {}

  submit(): void {
    if (this.fg.value.customFile) {
      console.log('do the upload method');
      this.modelSelection.selectCustomModel({
        customFile: this.fg.value.customFile,
        model: this.fg.value.model as string,
        transform: this.fg.value.transform as string,
      });
    } else {
      this.modelSelection
        .selectSampleModel({
          sampleFile: this.fg.value.sampleFile as string,
          model: this.fg.value.model as string,
          transform: this.fg.value.transform as string,
        })
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigate(['model']);
        });
    }
  }
}
