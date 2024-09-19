import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slop2PageRoutingModule } from './slop2-routing.module';

import { Slop2Page } from './slop2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Slop2PageRoutingModule
  ],
  declarations: [Slop2Page]
})
export class Slop2PageModule {}
