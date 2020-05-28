import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Basket {

    pizzaApiUrl = 'https://api.ynov.jcatania.io/pizza';
    ingredientApiUrl = 'https://api.ynov.jcatania.io/ingredient';

    lstPizza: Array<object> = [];
    pizzas: any[] = [];
    nbPizza = 0;
    pizza: any;

    lstIngredients: Array<object> = [];
    lstIngredientsOfPizza: Array<object> = [];

    CMpizza: any;
    CMingredient: any;
    CMlstIngredients: Array<object> = [];

    constructor(private http: HttpClient, ) {
    }

    getData() {
        this.http.get(this.pizzaApiUrl).subscribe((response) => {
            this.lstPizza = [];
            for (const [key, value] of Object.entries(response)) {
                this.lstPizza.push(value);
            }
        });

        this.http.get(this.ingredientApiUrl).subscribe((response) => {
            this.lstIngredients = [];
            for (const [key, value] of Object.entries(response)) {
                this.lstIngredients.push(value);
            }
        });
    }
}
