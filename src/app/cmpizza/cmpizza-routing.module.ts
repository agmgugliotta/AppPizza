import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CMpizzaPage } from './cmpizza.page';

const routes: Routes = [
  {
    path: '',
    component: CMpizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CMpizzaPageRoutingModule {}
