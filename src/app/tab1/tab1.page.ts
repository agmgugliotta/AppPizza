import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  pizzaApiUrl = 'https://api.ynov.jcatania.io/pizza';
  pizzas: any[];
  lstPizza: Array<object> = [];

  constructor(private http: HttpClient, private route: Router) {
    this.http.get(this.pizzaApiUrl).subscribe((response) => {
      for (const [key, value] of Object.entries(response)) {
        this.lstPizza.push(value);
      }
      console.log(this.lstPizza);
    });
  }

  pizzaDetail(pizza) {
    localStorage.setItem('pizza', JSON.stringify(pizza));
    console.log(pizza);
    this.route.navigate(['/tab2']);
  }
  pizzaAdd(pizza) {
    this.pizzas = JSON.parse(localStorage.getItem('basket'));
    this.pizzas.push(pizza);
    localStorage.setItem('basket', JSON.stringify(this.pizzas));
  }

  pizzaRemove(pizza) {
    this.pizzas = JSON.parse(localStorage.getItem('basket'));
    const index =  this.pizzas.indexOf(pizza);
    if (index > -1) {
      this.pizzas.splice(index, 1);
    }
    localStorage.setItem('basket', JSON.stringify(this.pizzas));
  }
}
