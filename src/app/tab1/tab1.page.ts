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

export class Tab1Page implements OnInit{

  constructor(private http: HttpClient, private route: Router, public modalCtrl: ModalController, private basket: Basket) {
    localStorage.clear();
  }

  ngOnInit() {
    this.basket.getData();
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
    this.basket.pizzas.push(pizza);
    this.basket.nbPizza = this.basket.pizzas.length;
  }
}
