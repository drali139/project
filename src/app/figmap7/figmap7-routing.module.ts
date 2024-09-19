import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmap7Page } from './figmap7.page';

const routes: Routes = [
  {
    path: '',
    component: Figmap7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmap7PageRoutingModule {}
