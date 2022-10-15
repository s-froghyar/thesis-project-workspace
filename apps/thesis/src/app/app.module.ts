import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiThesisModule } from '@somaf-ws/ui-thesis';

import { ThesisRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiThesisModule,
    ThesisRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
