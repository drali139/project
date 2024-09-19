import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertDesignPage } from './alert-design.page';

const routes: Routes = [
  {
    path: '',
    component: AlertDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertDesignPageRoutingModule {}
