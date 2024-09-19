import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coconut2Page } from './coconut-2.page';

const routes: Routes = [
  {
    path: '',
    component: Coconut2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coconut2PageRoutingModule {}
