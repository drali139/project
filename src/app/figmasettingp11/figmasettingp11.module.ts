import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Figmasettingp11PageRoutingModule } from './figmasettingp11-routing.module';

import { Figmasettingp11Page } from './figmasettingp11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmasettingp11PageRoutingModule
  ],
  declarations: [Figmasettingp11Page]
})
export class Figmasettingp11PageModule {}
