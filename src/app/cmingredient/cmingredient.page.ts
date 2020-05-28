import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Ingredient } from '../Ingredient';
import { Basket } from '../Basket';

@Component({
  selector: 'app-cmingredient',
  templateUrl: './cmingredient.page.html',
  styleUrls: ['./cmingredient.page.scss'],
})
export class CmingredientPage {

  ingredientApiUrl = 'https://api.ynov.jcatania.io/ingredient';

  name = '';

  newIngredient: Ingredient;

  constructor(private http: HttpClient, private route: Router, private basket: Basket) { }

  backHome() {
    this.basket.CMingredient = '';
    this.basket.getData();
    this.route.navigate(['/tab3']);
  }

  createIngredient() {
    this.newIngredient = <Ingredient>{};

    this.newIngredient.nom = this.name
    if (confirm('Do you want to add ' + this.newIngredient.nom + ' ingrédient ?') === true) {
      this.http.post(this.ingredientApiUrl, this.newIngredient).subscribe((response) => {
        this.basket.getData();
        alert('Ajout effectué');
      });
    } else {
      alert('Ajout annulé');
    }
  }

  updateIngredient(ingredient) {
    ingredient.nom = this.name;

    if (confirm('Do you want to update ' + ingredient.nom + ' ingrédient ?') === true) {
      this.http.patch(this.ingredientApiUrl + '/' + ingredient['id'], ingredient).subscribe((response) => {
        this.basket.getData();
        alert('Modification effectué');
      });
    } else {
      alert('Modification annulé');
    }
  }

}
