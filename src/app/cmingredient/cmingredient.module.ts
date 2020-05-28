import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmingredientPageRoutingModule } from './cmingredient-routing.module';

import { CmingredientPage } from './cmingredient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmingredientPageRoutingModule
  ],
  declarations: [CmingredientPage]
})
export class CmingredientPageModule {}
