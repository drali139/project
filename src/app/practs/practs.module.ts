import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PractsPageRoutingModule } from './practs-routing.module';

import { PractsPage } from './practs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PractsPageRoutingModule
  ],
  declarations: [PractsPage]
})
export class PractsPageModule {}
