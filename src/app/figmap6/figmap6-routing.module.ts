import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmap6Page } from './figmap6.page';

const routes: Routes = [
  {
    path: '',
    component: Figmap6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmap6PageRoutingModule {}
