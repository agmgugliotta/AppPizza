import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  pizzaApiUrl = 'https://api.ynov.jcatania.io/ingredient';

  pizza: any;
  pizzas: any[];

  lstIngredients: Array<object> = [];
  lstIngredientsOfPizza: Array<object> = [];

  constructor(private http: HttpClient, private route: Router) {
    this.pizza = JSON.parse(localStorage.getItem('pizza'));
    this.http.get(this.pizzaApiUrl).subscribe((response) => {
      for (const [key, value] of Object.entries(response)) {
        this.lstIngredients.push(value);
      }
      this.pizzaIngredientsList(this.pizza);
    });
  }

  pizzaIngredientsList(pizza) {
    for (let i = 0; i < pizza['ingredients'].length; i++) {
      for (let x = 0; x < this.lstIngredients.length; x++) {
        if (pizza['ingredients'][i] === this.lstIngredients[x]['id']) {
          this.lstIngredientsOfPizza.push(this.lstIngredients[x]['nom']);
        }
      }
    }
  }

  pizzaAdd(pizza) {
    this.pizzas = JSON.parse(localStorage.getItem('basket'));
    this.pizzas.push(pizza);
    localStorage.setItem('basket', JSON.stringify(this.pizzas));
  }

  backHome() {
    this.route.navigate(['/']);
  }
}
