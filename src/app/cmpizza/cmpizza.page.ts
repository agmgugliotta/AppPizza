import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Basket } from '../Basket';
import { Pizza } from '../Pizza';

@Component({
  selector: 'app-cmpizza',
  templateUrl: './cmpizza.page.html',
  styleUrls: ['./cmpizza.page.scss'],
})
export class CMpizzaPage implements OnInit {

  pizzaApiUrl = 'https://api.ynov.jcatania.io/pizza';
  ingredientApiUrl = 'https://api.ynov.jcatania.io/ingredient';

  name = '';
  img = '';
  price = '';

  newPizza: Pizza;
  idIngredient: number[] = [];

  constructor(private http: HttpClient, private basket: Basket,  private route: Router) { }

  ngOnInit() {
    this.pizzaIngredientsList(this.basket.CMpizza);
    console.log(this.basket.lstIngredientsOfPizza);
  }

  createPizza() {
    this.newPizza = <Pizza>{};

    for (let i = 0; i < this.basket.CMlstIngredients.length; i++) {
      console.log(this.basket.CMlstIngredients[i]['id']);
      this.idIngredient.push(this.basket.CMlstIngredients[i]['id']);
    }

    this.newPizza.ingredients = this.idIngredient;
    this.newPizza.nom = this.name;
    this.newPizza.photo = this.img;
    this.newPizza.prix = this.price;

    if (confirm('Do you want to add ' + this.newPizza.nom + ' pizza ?') === true) {
      this.http.post(this.pizzaApiUrl, this.newPizza).subscribe((response) => {
        this.basket.getData();
        alert('Ajout effectué');
      });
    } else {
      alert('Ajout annulé');
      }
  }

  updatePizza(pizza) {
    this.newPizza = <Pizza>{};

    this.idIngredient = pizza['ingredients'];
    this.newPizza.ingredients = this.idIngredient;
    this.newPizza.nom = this.name;
    this.newPizza.photo = this.img;
    this.newPizza.prix = this.price;

    if (confirm('Do you want to add ' + this.newPizza.nom + ' pizza ?') === true) {
      this.http.patch(this.pizzaApiUrl + '/' + pizza['id'], this.newPizza).subscribe((response) => {
        this.basket.getData();
        alert('Ajout effectué');
      });
    } else {
      alert('Ajout annulé');
    }
  }

  pizzaIngredientsList() {
    const pizza = this.basket.CMpizza;
    this.basket.lstIngredientsOfPizza = [];

    for (let i = 0; i < pizza['ingredients'].length; i++) {
      for (let x = 0; x < this.basket.lstIngredients.length; x++) {
        if (pizza['ingredients'][i] === this.basket.lstIngredients[x]['id']) {
          this.basket.lstIngredientsOfPizza.push(this.basket.lstIngredients[x]['nom']);
        }
      }
    }
  }

  addIngredient(ingredient) {
    this.basket.CMlstIngredients.push(ingredient);
  }

  deleteIngredient(ingredient) {
    const index =  this.basket.CMlstIngredients.indexOf(ingredient);
    if (index > -1) {
      this.basket.CMlstIngredients.splice(index, 1);
    }
  }

  backHome() {
    this.basket.CMpizza = '';
    this.basket.CMlstIngredients = [];
    this.basket.getData();
    this.route.navigate(['/tab3']);
  }

}
