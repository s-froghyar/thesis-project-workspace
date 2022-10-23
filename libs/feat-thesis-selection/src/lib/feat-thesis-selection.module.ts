import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { RouterModule } from '@angular/router';
import { ModelSelectionService } from '@somaf-ws/utils-thesis';
import { HttpClientModule } from '@angular/common/http';
import { MenuSelectorComponent } from './menu-selector/menu-selector.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SelectionScreenComponent },
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [SelectionScreenComponent, MenuSelectorComponent],
  providers: [ModelSelectionService],
})
export class FeatThesisSelectionModule {}
