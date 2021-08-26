import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThesisLayoutModule } from '@somaf-ws/thesis-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, SelectionScreenComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ThesisLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
