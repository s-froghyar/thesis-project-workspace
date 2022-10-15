import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModelScreenComponent } from './model-screen/model-screen.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ModelScreenComponent }
    ])
  ],
  declarations: [
    ModelScreenComponent
  ],
})
export class FeatThesisModelModule {}
