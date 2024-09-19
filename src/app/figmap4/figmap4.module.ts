import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Figmap4PageRoutingModule } from './figmap4-routing.module';

import { Figmap4Page } from './figmap4.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmap4PageRoutingModule
  ],
  declarations: [Figmap4Page]
})
export class Figmap4PageModule {}
