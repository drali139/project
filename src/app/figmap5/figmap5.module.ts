import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Figmap5PageRoutingModule } from './figmap5-routing.module';

import { Figmap5Page } from './figmap5.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmap5PageRoutingModule
  ],
  declarations: [Figmap5Page]
})
export class Figmap5PageModule {}
