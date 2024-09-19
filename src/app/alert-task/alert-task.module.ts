import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertTaskPageRoutingModule } from './alert-task-routing.module';

import { AlertTaskPage } from './alert-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertTaskPageRoutingModule
  ],
  declarations: [AlertTaskPage]
})
export class AlertTaskPageModule {}
