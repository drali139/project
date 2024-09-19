import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmadebitp12Page } from './figmadebitp12.page';

const routes: Routes = [
  {
    path: '',
    component: Figmadebitp12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmadebitp12PageRoutingModule {}
