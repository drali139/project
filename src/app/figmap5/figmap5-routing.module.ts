import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmap5Page } from './figmap5.page';

const routes: Routes = [
  {
    path: '',
    component: Figmap5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmap5PageRoutingModule {}
