import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Figmap7PageRoutingModule } from './figmap7-routing.module';

import { Figmap7Page } from './figmap7.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmap7PageRoutingModule
  ],
  declarations: [Figmap7Page]
})
export class Figmap7PageModule {}
