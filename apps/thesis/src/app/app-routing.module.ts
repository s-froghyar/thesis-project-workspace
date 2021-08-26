import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';


const routes: Routes = [
  { path: '', component: SelectionScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }