import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingbuttonPageRoutingModule } from './floatingbutton-routing.module';

import { FloatingbuttonPage } from './floatingbutton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingbuttonPageRoutingModule
  ],
  declarations: [FloatingbuttonPage]
})
export class FloatingbuttonPageModule {}
