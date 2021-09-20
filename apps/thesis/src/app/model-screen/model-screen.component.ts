import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ColorHarmony } from '@somaf-ws/color-harmonies';
import { finalize, first } from 'rxjs/operators';

import { ColorPaletteService } from '../core/color-palette.service';
import { S3Service } from '../core/s3.service';
// import {  } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'somaf-ws-model-screen',
  templateUrl: './model-screen.component.html',
  styleUrls: ['./model-screen.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(':enter', [
          style({opacity: 0}),
          animate('0.5s ease-out', 
                  style({ opacity: 0.5 })
                )
          ]
        ),
        transition(':leave', [
          style({opacity: 0.5}),
          animate('0.5s ease-out', 
                  style({ opacity: 0 })
              )
          ]
        )
      ]
    )
  ]
})
export class ModelScreenComponent {
  isLoading = true;
  colorHarmony!: ColorHarmony;
  bgColors!: any;
  neurons;
  state;

  loadingIcon = faSpinner;
  constructor(
    public readonly colors: ColorPaletteService,
    private readonly router: Router,
    private readonly s3: S3Service) {
      this.setInitialState();
      this.setColorHarmony();
      this.s3.getFc1Neurons().pipe(
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
      sessionStorage.setItem('model_options', Object.assign({}, this.state))
    } else if (tempOptions) {
      this.state = Object.assign({}, tempOptions);
    }
    console.log(this.state);
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
