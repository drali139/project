import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Figmap1PageRoutingModule } from './figmap1-routing.module';

import { Figmap1Page } from './figmap1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Figmap1PageRoutingModule
  ],
  declarations: [Figmap1Page]
})
export class Figmap1PageModule {}
