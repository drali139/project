import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Figmarecievep10PageRoutingModule } from './figmarecievep10-routing.module';

import { Figmarecievep10Page } from './figmarecievep10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Figmarecievep10PageRoutingModule
  ],
  declarations: [Figmarecievep10Page]
})
export class Figmarecievep10PageModule {}
