import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Figmap3PageRoutingModule } from './figmap3-routing.module';

import { Figmap3Page } from './figmap3.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmap3PageRoutingModule
  ],
  declarations: [Figmap3Page]
})
export class Figmap3PageModule {}
