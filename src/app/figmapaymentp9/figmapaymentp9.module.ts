import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Figmapaymentp9PageRoutingModule } from './figmapaymentp9-routing.module';

import { Figmapaymentp9Page } from './figmapaymentp9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmapaymentp9PageRoutingModule
  ],
  declarations: [Figmapaymentp9Page]
})
export class Figmapaymentp9PageModule {}
