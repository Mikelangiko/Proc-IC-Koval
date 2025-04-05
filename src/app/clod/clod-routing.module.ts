import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClodPage } from './clod.page';

const routes: Routes = [
  {
    path: '',
    component: ClodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClodPageRoutingModule {}
