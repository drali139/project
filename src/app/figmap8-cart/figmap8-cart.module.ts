import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Figmap8CartPageRoutingModule } from './figmap8-cart-routing.module';

import { Figmap8CartPage } from './figmap8-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmap8CartPageRoutingModule
  ],
  declarations: [Figmap8CartPage]
})
export class Figmap8CartPageModule {}
