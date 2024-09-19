import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slop2Page } from './slop2.page';

const routes: Routes = [
  {
    path: '',
    component: Slop2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Slop2PageRoutingModule {}
