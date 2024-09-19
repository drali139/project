import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertTaskPage } from './alert-task.page';

const routes: Routes = [
  {
    path: '',
    component: AlertTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertTaskPageRoutingModule {}
