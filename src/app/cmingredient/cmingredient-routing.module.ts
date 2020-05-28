import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmingredientPage } from './cmingredient.page';

const routes: Routes = [
  {
    path: '',
    component: CmingredientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmingredientPageRoutingModule {}
