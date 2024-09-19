import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coconut1Page } from './coconut1.page';

const routes: Routes = [
  {
    path: '',
    component: Coconut1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coconut1PageRoutingModule {}
