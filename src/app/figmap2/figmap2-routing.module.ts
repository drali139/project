import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmap2Page } from './figmap2.page';

const routes: Routes = [
  {
    path: '',
    component: Figmap2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmap2PageRoutingModule {}
