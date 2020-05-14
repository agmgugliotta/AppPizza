import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {

  lstPizza: Array<object> = [];
  pizzas: any[] = [];

  constructor(private http: HttpClient, private route: Router) {
    this.pizzas = JSON.parse(localStorage.getItem('basket'));
    this.pizzas.forEach(pizza => this.lstPizza.push(JSON.parse(pizza)));
  }

  backHome() {
    localStorage.setItem('basket', JSON.stringify(this.lstPizza));
    this.route.navigate(['/tab1']);
  }

  pizzaRemove(pizza) {
    const index =  this.lstPizza.indexOf(pizza);
    if (index > -1) {
      this.lstPizza.splice(index, 1);
    }
    localStorage.setItem('basket', JSON.stringify(this.lstPizza));
  }

  quantityPizza() {
    // TO DO
  }
}
