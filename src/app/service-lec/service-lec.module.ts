import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceLecPageRoutingModule } from './service-lec-routing.module';

import { ServiceLecPage } from './service-lec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceLecPageRoutingModule
  ],
  declarations: [ServiceLecPage]
})
export class ServiceLecPageModule {}
