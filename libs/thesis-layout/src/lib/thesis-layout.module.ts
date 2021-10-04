import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MenuScreenComponent } from "./layout/menu-screen/menu-screen.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { TabsModule } from "ngx-bootstrap/tabs";
import { AboutComponent } from "./layout/menu-screen/about/about.component";
import { TpComponent } from "./layout/menu-screen/tp/tp.component";
import { AugerinoComponent } from "./layout/menu-screen/augerino/augerino.component";
import { AugmentationsComponent } from "./layout/menu-screen/augmentations/augmentations.component";
import { BaselineComponent } from "./layout/menu-screen/baseline/baseline.component";
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatSliderModule,
    MatTooltipModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  declarations: [
    LayoutComponent,
    MenuScreenComponent,
    AboutComponent,
    TpComponent,
    AugerinoComponent,
    AugmentationsComponent,
    BaselineComponent,
    AudioPlayerComponent,
  ],
  exports: [LayoutComponent, AudioPlayerComponent],
})
export class ThesisLayoutModule {}
