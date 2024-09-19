import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Coconut1PageRoutingModule } from './coconut1-routing.module';

import { Coconut1Page } from './coconut1.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coconut1PageRoutingModule
  ],
  declarations: [Coconut1Page]
})
export class Coconut1PageModule {}
