import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmap8CartPage } from './figmap8-cart.page';

const routes: Routes = [
  {
    path: '',
    component: Figmap8CartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmap8CartPageRoutingModule {}
