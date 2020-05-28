import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Basket } from '../Basket';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  pizzaApiUrl = 'https://api.ynov.jcatania.io/pizza';
  ingredientApiUrl = 'https://api.ynov.jcatania.io/ingredient';

  constructor(private http: HttpClient, private basket: Basket,  private route: Router) {
  }

  ngOnInit() {
    this.basket.getData();
  }

  addPizza() {
    this.route.navigate(['/cmpizza']);
  }

  majPizza(pizza) {
    this.basket.CMpizza = pizza;
    this.route.navigate(['/cmpizza']);
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
    this.route.navigate(['/cmingredient']);
  }

  majIngredient(ingredient) {
    this.basket.ingredient = ingredient;
    this.route.navigate(['/cmingredient']);
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
