import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { ColorPaletteService } from './color-palette.service';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [],
    providers: [ColorPaletteService],
    bootstrap: [],
})
export class CoreModule { }
