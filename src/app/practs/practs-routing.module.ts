import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PractsPage } from './practs.page';

const routes: Routes = [
  {
    path: '',
    component: PractsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PractsPageRoutingModule {}
