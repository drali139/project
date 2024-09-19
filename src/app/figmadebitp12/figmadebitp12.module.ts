import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Figmadebitp12PageRoutingModule } from './figmadebitp12-routing.module';

import { Figmadebitp12Page } from './figmadebitp12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmadebitp12PageRoutingModule
  ],
  declarations: [Figmadebitp12Page]
})
export class Figmadebitp12PageModule {}
