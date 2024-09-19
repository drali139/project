import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Figmap6PageRoutingModule } from './figmap6-routing.module';

import { Figmap6Page } from './figmap6.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmap6PageRoutingModule
  ],
  declarations: [Figmap6Page]
})
export class Figmap6PageModule {}
