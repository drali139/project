import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SamplemodPageRoutingModule } from './samplemod-routing.module';

import { SamplemodPage } from './samplemod.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplemodPageRoutingModule
  ],
  declarations: [SamplemodPage]
})
export class SamplemodPageModule {}
