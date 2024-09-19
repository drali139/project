import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nike2Page } from './nike2.page';

const routes: Routes = [
  {
    path: '',
    component: Nike2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nike2PageRoutingModule {}
