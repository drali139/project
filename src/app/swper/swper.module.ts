import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwperPageRoutingModule } from './swper-routing.module';

import { SwperPage } from './swper.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwperPageRoutingModule
  ],
  declarations: [SwperPage]
})
export class SwperPageModule {}
