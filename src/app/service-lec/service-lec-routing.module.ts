import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceLecPage } from './service-lec.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceLecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceLecPageRoutingModule {}
