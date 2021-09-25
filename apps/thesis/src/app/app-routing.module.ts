import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateModel } from './core/route.guard';
import { ModelScreenComponent } from './model-screen/model-screen.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';


const routes: Routes = [
  { path: '', component: SelectionScreenComponent, data: {animation: 'SelectorScreen'} },
  { path: 'model', component: ModelScreenComponent, data: {animation: 'ModelScreen'}, canActivate: [CanActivateModel]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateModel]
})
export class AppRoutingModule { }