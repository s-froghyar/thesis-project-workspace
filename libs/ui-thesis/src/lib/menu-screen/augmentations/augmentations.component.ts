import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AudioMetadata } from '@somaf-ws/types-thesis';
import { AudioPlayerComponent } from '../../audio-player/audio-player.component';

@Component({
  selector: 'augmentations',
  standalone: true,
  imports: [CommonModule, AudioPlayerComponent],
  template: `
    <h2>Audio augmentations</h2>
    <p>
      Some augmentations of audio signals take an extra step compared to
      standard spatial transformations on images would, as the image, the
      Mel-Spectrogram, is not generated until the transformation is applied. For
      this work pitch shift and Gaussian noise injection were chosen as the
      transformations.
    </p>
    <div class="content">
      <div class="col">
        <img
          src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/ps.jpg"
          alt="pitch shift"
        />
        <h2>Pitch Shift</h2>
        <p>
          Pitch shifting is an augmentation technique to create multiple samples
          from an audio signal by the transposition of its tone. In order to
          implement it, Librosa was used. Their API allowed a simple parameter
          to be used to shift the pitch by a certain tone. It is however worth
          noting from the figure that pitch shift drastically changes the
          spectrogram as well as the fact that librosa uses the CPU to augment
          the samples which considerably elongated the training time.
        </p>
      </div>
      <div class="col">
        <img
          src="https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/gn.jpg"
          alt="gaussian noise"
        />
        <h2>Gaussian noise injection</h2>
        <p>
          For Gaussian noise, the governing parameter is the signal-to-noise
          ratio. The original author's only used random noise added to the
          signal or none, thus duplicating their training set. It was decided to
          use 2 different levels of noise levels (namely SNR-9 and SNR-12) on
          top of a clean sample.
        </p>
      </div>
    </div>
    <div class="player-area">
      <div class="setting-btns">
        <div
          class="aug-btn"
          [class.active]="meta.selected"
          *ngFor="let meta of settingMetas"
          (click)="selectMeta(meta)"
        >
          {{ meta.title }}
        </div>
      </div>
      <thesis-audio-player [meta]="selectedMeta"></thesis-audio-player>
    </div>
  `,
  styleUrls: ['augmentations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AugmentationsComponent {
  settingMetas: AudioMetadata[] = [
    {
      title: 'PS - 1 tone down',
      url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/psd.wav',
      selected: false,
    },
    {
      title: 'PS - 1 tone up',
      url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/psu.wav',
      selected: false,
    },
    {
      title: 'Base',
      url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/base.wav',
      selected: true,
    },
    {
      title: 'NI - SNR-9',
      url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/ni9.wav',
      selected: false,
    },
    {
      title: 'NI - SNR-12',
      url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/ni12.wav',
      selected: false,
    },
  ];
  selectedMeta: AudioMetadata = {
    title: 'Base',
    url: 'https://mgr-thesis-bucket.s3.eu-west-2.amazonaws.com/static/assets/audio_examples/base.wav',
  };
  selectMeta(meta: AudioMetadata): void {
    this.settingMetas.forEach((m) => (m.selected = false));
    const selectedInd = this.settingMetas.findIndex(
      (m) => m.title === meta.title
    );
    this.settingMetas[selectedInd].selected = true;
    this.selectedMeta = Object.assign({}, meta) as AudioMetadata;
  }
}
