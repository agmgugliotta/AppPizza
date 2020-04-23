import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pizza: any;

  constructor() {
    this.pizza = JSON.parse(localStorage.getItem('pizza'));
    console.log(this.pizza);
  }

}
