import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomheightmodalPageRoutingModule } from './customheightmodal-routing.module';

import { CustomheightmodalPage } from './customheightmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomheightmodalPageRoutingModule
  ],
  declarations: [CustomheightmodalPage]
})
export class CustomheightmodalPageModule {}
