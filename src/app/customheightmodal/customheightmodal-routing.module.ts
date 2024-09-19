import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomheightmodalPage } from './customheightmodal.page';

const routes: Routes = [
  {
    path: '',
    component: CustomheightmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomheightmodalPageRoutingModule {}
