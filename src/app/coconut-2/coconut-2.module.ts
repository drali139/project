import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Coconut2PageRoutingModule } from './coconut-2-routing.module';

import { Coconut2Page } from './coconut-2.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coconut2PageRoutingModule
  ],
  declarations: [Coconut2Page]
})
export class Coconut2PageModule {}
