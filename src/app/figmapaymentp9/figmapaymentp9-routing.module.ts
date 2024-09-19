import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmapaymentp9Page } from './figmapaymentp9.page';

const routes: Routes = [
  {
    path: '',
    component: Figmapaymentp9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmapaymentp9PageRoutingModule {}
