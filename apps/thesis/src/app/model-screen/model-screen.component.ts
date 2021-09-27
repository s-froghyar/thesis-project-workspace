import { Component } from '@angular/core';
import { faCompressAlt, faExpandAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ColorHarmony } from '@somaf-ws/color-harmonies';
import { AudioMetadata, bringUpPlayer, collapseAnimation, edgeContentReveal, inOutAnimation, ModelNeurons } from '@somaf-ws/utils';
import { finalize, first } from 'rxjs/operators';

import { ColorPaletteService } from '../core/color-palette.service';
import { S3Service } from '../core/s3.service';

@Component({
  selector: 'somaf-ws-model-screen',
  templateUrl: './model-screen.component.html',
  styleUrls: ['./model-screen.component.scss'],
  animations: [ inOutAnimation, collapseAnimation, edgeContentReveal, bringUpPlayer ]
})
export class ModelScreenComponent {
  isLoading = true;
  colorHarmony!: ColorHarmony;
  bgColors;
  neurons!: ModelNeurons;
  state;
  isExpanded = false;

  fullImgUrl!: string;
  audioMetaData: AudioMetadata = {title: 'Sample audio title', url: ''};

  loadingIcon = faSpinner;
  expandIcon = faExpandAlt;
  collapseIcon = faCompressAlt;
  constructor(
    public readonly colors: ColorPaletteService,
    readonly s3: S3Service
  ) {
      this.s3.initModel();
      this.fullImgUrl = this.s3.getSampleResultsUrl() + '/full.jpg';
      this.audioMetaData = this.s3.getSampleAudioMetadata();
      this.setColorHarmony();
      this.setFcNeurons();
  }
  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  private setColorHarmony(): void {
    this.colorHarmony = this.colors.getColorHarmony('tetradic') as ColorHarmony;
    this.bgColors = {
      bl: {
        input: this.colors.radGradTransform(this.colorHarmony, 'base'),
        conv1: this.colors.radGradTransform(this.colorHarmony, 'secondary'),
        conv2: this.colors.radGradTransform(this.colorHarmony, 'tertiary',),
        fc: this.colors.radGradTransform(this.colorHarmony, 'fourth'),
      },
      tr: {
        input: this.colors.radGradTransform(this.colorHarmony, 'base', true),
        conv1: this.colors.radGradTransform(this.colorHarmony, 'secondary', true),
        conv2: this.colors.radGradTransform(this.colorHarmony, 'tertiary', true),
        fc: this.colors.radGradTransform(this.colorHarmony, 'fourth', true),
      }
      
    } 
  }
  private setFcNeurons(): void {
    this.s3.getFcNeurons()
      .pipe( first(), finalize(() => this.isLoading = false)).subscribe(
        res => this.neurons = res);
  }
}
