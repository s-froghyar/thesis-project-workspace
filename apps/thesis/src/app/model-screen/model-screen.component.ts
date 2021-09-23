import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ColorHarmony } from '@somaf-ws/color-harmonies';
import { finalize, first } from 'rxjs/operators';
import { inOutAnimation } from '../core/animations';

import { ColorPaletteService } from '../core/color-palette.service';
import { S3Service } from '../core/s3.service';

@Component({
  selector: 'somaf-ws-model-screen',
  templateUrl: './model-screen.component.html',
  styleUrls: ['./model-screen.component.scss'],
  animations: [
    inOutAnimation
  ]
})
export class ModelScreenComponent {
  isLoading = true;
  colorHarmony!: ColorHarmony;
  bgColors;
  neurons;
  state;

  loadingIcon = faSpinner;
  constructor(
    public readonly colors: ColorPaletteService,
    private readonly router: Router,
    private readonly s3: S3Service) {
      this.setInitialState();
      this.setColorHarmony();
      this.s3.getFcNeurons().pipe(
        first(),
        finalize(() => this.isLoading = false)
      ).subscribe(res => {
        console.log(res);
        
        this.neurons = res;
      });
  }

  private setInitialState(): void {
    const tempOptions = sessionStorage.getItem('model_options');

    if (this.router.getCurrentNavigation()?.extras.state) {
      this.state = this.router.getCurrentNavigation()?.extras.state;
      sessionStorage.setItem('model_options', JSON.stringify(this.state))
    } else if (tempOptions) {
      this.state = JSON.parse(tempOptions);
    }
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
}
