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

  basketContent: any[] = [];

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

  quantityPizza() {
    // TO DO
  }
}
