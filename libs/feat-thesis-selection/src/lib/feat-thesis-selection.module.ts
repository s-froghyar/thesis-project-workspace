import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SelectionScreenComponent },
    ]),
  ],
  declarations: [SelectionScreenComponent],
})
export class FeatThesisSelectionModule {}
