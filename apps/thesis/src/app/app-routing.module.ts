import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ModelGuard } from '@somaf-ws/utils-thesis';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@somaf-ws/feat-thesis-selection').then(
        (m) => m.FeatThesisSelectionModule
      ),
  },
  {
    path: 'model',
    loadChildren: () =>
      import('@somaf-ws/feat-thesis-model').then(
        (m) => m.FeatThesisModelModule
      ),
    canMatch: [ModelGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ThesisRoutingModule {}
