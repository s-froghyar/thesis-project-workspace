/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { AudioMetadata } from '@somaf-ws/utils';

@Component({
  selector: 'augmentations',
  templateUrl: './augmentations.component.html',
  styleUrls: ['./augmentations.component.scss']
})
export class AugmentationsComponent {
  settingMetas = [
    { title: 'PS - 1 tone down', url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/psd.wav', selected: false },
    { title: 'PS - 1 tone up', url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/psu.wav', selected: false },
    { title: 'Base', url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/base.wav', selected: true },
    { title: 'NI - SNR-9', url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/ni9.wav', selected: false },
    { title: 'NI - SNR-12', url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/ni12.wav', selected: false }
  ];
  selectedMeta: AudioMetadata = { title: 'Base', url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/base.wav' };
  selectMeta(meta): void {
    this.settingMetas.forEach(m => m.selected = false);
    const selectedInd = this.settingMetas.findIndex(m => m.title === meta.title)
    this.settingMetas[selectedInd].selected = true;
    this.selectedMeta = Object.assign({}, meta) as AudioMetadata;
  }



}
