import { Injectable } from '@angular/core';

@Injectable()
export class Basket {

    lstPizza: Array<object> = [];
    pizzas: any[] = [];
    nbPizza = 0;
    pizza: any;

    lstIngredients: Array<object> = [];
    lstIngredientsOfPizza: Array<object> = [];
    ingredient: any;

    constructor() {
    }
}
