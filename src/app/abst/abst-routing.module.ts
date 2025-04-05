import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbstPage } from './abst.page';

const routes: Routes = [
  {
    path: '',
    component: AbstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstPageRoutingModule {}
