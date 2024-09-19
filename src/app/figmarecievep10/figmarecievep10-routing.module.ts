import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Figmarecievep10Page } from './figmarecievep10.page';

const routes: Routes = [
  {
    path: '',
    component: Figmarecievep10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Figmarecievep10PageRoutingModule {}
