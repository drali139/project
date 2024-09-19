import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmap4Page } from './figmap4.page';

const routes: Routes = [
  {
    path: '',
    component: Figmap4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmap4PageRoutingModule {}
