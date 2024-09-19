import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwperPage } from './swper.page';

const routes: Routes = [
  {
    path: '',
    component: SwperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwperPageRoutingModule {}
