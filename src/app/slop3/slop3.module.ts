import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slop3PageRoutingModule } from './slop3-routing.module';

import { Slop3Page } from './slop3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Slop3PageRoutingModule
  ],
  declarations: [Slop3Page]
})
export class Slop3PageModule {}
