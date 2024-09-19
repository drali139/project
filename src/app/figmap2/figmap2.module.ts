import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Figmap2PageRoutingModule } from './figmap2-routing.module';

import { Figmap2Page } from './figmap2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmap2PageRoutingModule
  ],
  declarations: [Figmap2Page]
})
export class Figmap2PageModule {}
