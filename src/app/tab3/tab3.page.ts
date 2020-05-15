import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Basket } from '../Basket';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private basket: Basket,  private route: Router) {
  }

  majPizza(pizza) {
    this.basket.pizza = pizza;
    // this.route.navigate(['/majPizza']);
  }

  deletePizza(pizza) {
    if (confirm('Do you want to delete ' + pizza['nom'] + ' pizza ?') === true) {
      // TO DO
      alert('suppresion effectué');
    } else {
      alert('suppresion annulé');
    }
  }

  majIngredient(ingredient) {
    this.basket.ingredient = ingredient;
    // this.route.navigate(['/majIngredient']);
  }


  deleteIngredient(ingredient) {
    if (confirm('Do you want to delete ' + ingredient['nom'] + ' ingredient ?') === true) {
      // TO DO
      alert('suppresion effectué');
    } else {
      alert('suppresion annulé');
    }
  }

}
