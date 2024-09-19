import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Nike1PageRoutingModule } from './nike1-routing.module';

import { Nike1Page } from './nike1.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nike1PageRoutingModule
  ],
  declarations: [Nike1Page]
})
export class Nike1PageModule {}
