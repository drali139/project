import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StylingmodalPageRoutingModule } from './stylingmodal-routing.module';

import { StylingmodalPage } from './stylingmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StylingmodalPageRoutingModule
  ],
  declarations: [StylingmodalPage]
})
export class StylingmodalPageModule {}
