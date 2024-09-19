import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplemodPage } from './samplemod.page';

const routes: Routes = [
  {
    path: '',
    component: SamplemodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplemodPageRoutingModule {}
