import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { ColorPaletteService } from './color-palette.service';
import { LazyImgDirective } from './lazy-loading-img.directive';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [LazyImgDirective],
    providers: [ColorPaletteService],
    bootstrap: [],
})
export class CoreModule { }
