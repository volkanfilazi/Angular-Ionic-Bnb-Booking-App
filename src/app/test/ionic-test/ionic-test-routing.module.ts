import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicTestPage } from './ionic-test.page';

const routes: Routes = [
  {
    path: '',
    component: IonicTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicTestPageRoutingModule {}
