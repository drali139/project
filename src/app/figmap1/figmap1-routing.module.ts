import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmap1Page } from './figmap1.page';

const routes: Routes = [
  {
    path: '',
    component: Figmap1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmap1PageRoutingModule {}
