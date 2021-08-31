import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThesisLayoutModule } from '@somaf-ws/thesis-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuSelectorComponent } from './selection-screen/menu-selector/menu-selector.component';
import { ModelScreenComponent } from './model-screen/model-screen.component';
import { ConvLayerComponent } from './model-screen/conv-layer/conv-layer.component';
@NgModule({
  declarations: [AppComponent, SelectionScreenComponent, MenuSelectorComponent, ModelScreenComponent, ConvLayerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ThesisLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
