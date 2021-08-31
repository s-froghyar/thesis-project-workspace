import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelScreenComponent } from './model-screen/model-screen.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';


const routes: Routes = [
  { path: '', component: SelectionScreenComponent, data: {animation: 'SelectorScreen'} },
  { path: 'model', component: ModelScreenComponent, data: {animation: 'ModelScreen'}  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }