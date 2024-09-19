import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlopPageRoutingModule } from './slop-routing.module';

import { SlopPage } from './slop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlopPageRoutingModule
  ],
  declarations: [SlopPage]
})
export class SlopPageModule {}
