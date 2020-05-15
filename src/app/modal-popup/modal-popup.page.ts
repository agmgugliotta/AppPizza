import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Basket } from '../Basket';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})
export class ModalPopupPage {

  nbOfPizza: number;
  cpt: number;

  constructor(public navParams: NavParams, public modalCtrl: ModalController, private http: HttpClient, private route: Router,
              private basket: Basket) {
  }

  closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  pizzaRemove(pizza) {
    const index =  this.basket.pizzas.indexOf(pizza);
    if (index > -1) {
      this.basket.pizzas.splice(index, 1);
    }

    this.basket.nbPizza = this.basket.pizzas.length;
  }

  /*quantityPizza(pizza) {
    const index =  this.basket.pizzas.indexOf(pizza);
    this.cpt = 0;
    for (let i = 0; i < this.basket.pizzas.length; i++) {
      if (this.basket.pizzas[i]['id'] === pizza['id']) {
        this.cpt = this.cpt + 1;
      }
    }
    if (this.nbOfPizza !== this.cpt) {
      if (this.nbOfPizza > 0) {
        if (this.nbOfPizza > this.cpt) {
          for (let i = 0; i < this.cpt; this.cpt++) {
            if (this.basket.pizzas[i]['id'] === pizza['id']) {
              this.basket.pizzas.push(pizza);
            }
          }
        } else if (this.nbOfPizza < this.cpt) {
          for (let i = 0; i < this.cpt; this.cpt--) {
            if (this.basket.pizzas[i]['id'] === pizza['id']) {
              this.basket.pizzas.slice(this.basket.pizzas.indexOf(this.basket.pizzas[i]));
            }
          }
        }
      }
    }
  }*/
}
