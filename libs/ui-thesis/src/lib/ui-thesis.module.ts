import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class UiThesisModule {}
