import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlopPage } from './slop.page';

const routes: Routes = [
  {
    path: '',
    component: SlopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlopPageRoutingModule {}
