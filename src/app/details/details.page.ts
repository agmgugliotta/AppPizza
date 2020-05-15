import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Basket } from '../Basket';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  pizzaApiUrl = 'https://api.ynov.jcatania.io/pizza';

  constructor(private route: Router, private basket: Basket) {
    this.pizzaIngredientsList(this.basket.pizza);
  }

  pizzaIngredientsList(pizza) {
    for (let i = 0; i < pizza['ingredients'].length; i++) {
      for (let x = 0; x < this.basket.lstIngredients.length; x++) {
        if (pizza['ingredients'][i] === this.basket.lstIngredients[x]['id']) {
          this.basket.lstIngredientsOfPizza.push(this.basket.lstIngredients[x]['nom']);
        }
      }
    }
  }

  pizzaAdd(pizza) {
    this.basket.pizzas.push(pizza);
    this.basket.nbPizza = this.basket.pizzas.length;
  }

  backHome() {
    this.route.navigate(['/']);
  }
}
