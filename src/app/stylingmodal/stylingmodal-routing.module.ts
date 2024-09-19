import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StylingmodalPage } from './stylingmodal.page';

const routes: Routes = [
  {
    path: '',
    component: StylingmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylingmodalPageRoutingModule {}
