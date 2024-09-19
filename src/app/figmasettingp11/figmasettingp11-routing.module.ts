import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmasettingp11Page } from './figmasettingp11.page';

const routes: Routes = [
  {
    path: '',
    component: Figmasettingp11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmasettingp11PageRoutingModule {}
