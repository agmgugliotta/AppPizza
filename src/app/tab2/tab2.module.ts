import { IonicModule } from '@ionic/angular';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Component, OnInit } from '@angular/core';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})

export class Tab2PageModule implements OnInit {

  pizza: any;

  constructor() {
    this.pizza = localStorage.getItem('pizza');
    this.ngOnInit();
    console.log(this.pizza);
    console.log(localStorage.getItem('pizza'));
  }

  ngOnInit() {
    console.log(localStorage.getItem('pizza'));
  }
}
