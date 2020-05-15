import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPopupPage } from '../modal-popup/modal-popup.page';
import { Basket } from '../Basket';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  pizzaApiUrl = 'https://api.ynov.jcatania.io/pizza';

  constructor(private http: HttpClient, private route: Router, public modalCtrl: ModalController, private basket: Basket) {
    localStorage.clear();

    this.http.get(this.pizzaApiUrl).subscribe((response) => {
      for (const [key, value] of Object.entries(response)) {
        this.basket.lstPizza.push(value);
      }
    });
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPopupPage,
      componentProps: {
        name: 'Hello User'
      }
    });
    return await modal.present();
  }

  pizzaDetail(pizza) {
    this.basket.pizza = pizza;
    this.route.navigate(['/details']);
  }

  pizzaAdd(pizza) {
    // localStorage.setItem('pizza', JSON.stringify(pizza));
    this.basket.pizzas.push(pizza);
    // localStorage.setItem('basket', JSON.stringify(this.basket.pizzas));

    this.basket.nbPizza = this.basket.pizzas.length;
  }
}
