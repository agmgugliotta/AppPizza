import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CMpizzaPageRoutingModule } from './cmpizza-routing.module';

import { CMpizzaPage } from './cmpizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CMpizzaPageRoutingModule
  ],
  declarations: [CMpizzaPage]
})
export class CMpizzaPageModule {}
