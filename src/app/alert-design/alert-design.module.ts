import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertDesignPageRoutingModule } from './alert-design-routing.module';

import { AlertDesignPage } from './alert-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertDesignPageRoutingModule
  ],
  declarations: [AlertDesignPage]
})
export class AlertDesignPageModule {}
