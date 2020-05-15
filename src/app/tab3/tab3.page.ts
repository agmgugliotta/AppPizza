import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Basket } from '../Basket';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pizzaApiUrl = 'https://api.ynov.jcatania.io/pizza';
  ingredientApiUrl = 'https://api.ynov.jcatania.io/ingredient';

  constructor(private http: HttpClient, private basket: Basket,  private route: Router) {
  }

  addPizza() {
    // this.route.navigate(['/majPizza']);
  }

  majPizza(pizza) {
    this.basket.pizza = pizza;
    // this.route.navigate(['/majPizza']);
  }

  deletePizza(pizza) {
    if (confirm('Do you want to delete ' + pizza['nom'] + ' pizza ?') === true) {
      this.http.delete(this.pizzaApiUrl + '/' + pizza['id']).subscribe((response) => {
        this.basket.getData();
        alert('Suppresion effectué');
      });
    } else {
      alert('Suppresion annulé');
    }
  }

  addIngredient() {
    // this.route.navigate(['/majIngredient']);
  }

  majIngredient(ingredient) {
    this.basket.ingredient = ingredient;
    // this.route.navigate(['/majIngredient']);
  }


  deleteIngredient(ingredient) {
    if (confirm('Do you want to delete ' + ingredient['nom'] + ' ingredient ?') === true) {
      this.http.delete(this.ingredientApiUrl + '/' + ingredient['id']).subscribe((response) => {
        this.basket.getData();
        alert('Suppresion effectué');
      });
    } else {
      alert('Suppresion annulé');
    }
  }

}
