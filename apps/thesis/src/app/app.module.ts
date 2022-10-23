import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { S3Service } from '@somaf-ws/data-thesis';
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
  providers: [S3Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
