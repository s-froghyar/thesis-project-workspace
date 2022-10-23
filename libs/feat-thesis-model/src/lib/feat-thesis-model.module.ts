import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModelScreenComponent } from './model-screen/model-screen.component';

@NgModule({
  declarations: [ModelScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ModelScreenComponent },
    ]),
  ],
})
export class FeatThesisModelModule {}
