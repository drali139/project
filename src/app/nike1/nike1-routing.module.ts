import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nike1Page } from './nike1.page';

const routes: Routes = [
  {
    path: '',
    component: Nike1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nike1PageRoutingModule {}
