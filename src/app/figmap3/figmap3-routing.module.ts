import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmap3Page } from './figmap3.page';

const routes: Routes = [
  {
    path: '',
    component: Figmap3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmap3PageRoutingModule {}
