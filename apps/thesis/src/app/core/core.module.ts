import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { ClickOutsideDirective } from './click-outside.directive';
import { ColorPaletteService } from './color-palette.service';
import { LazyImgDirective } from './lazy-loading-img.directive';
import { S3Service } from './s3.service';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [LazyImgDirective, ClickOutsideDirective],
    providers: [ColorPaletteService, S3Service],
    bootstrap: [],
})
export class CoreModule { }
