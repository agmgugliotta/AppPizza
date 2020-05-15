import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPopupPage } from '../modal-popup/modal-popup.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  pizzaApiUrl = 'https://api.ynov.jcatania.io/pizza';
  lstPizza: Array<object> = [];
  lstBasket: any[] = [];
  pizzas: any[] = null;
  nbPizza = 0;

  constructor(private http: HttpClient, private route: Router, public modalCtrl: ModalController) {
    localStorage.clear();

    this.http.get(this.pizzaApiUrl).subscribe((response) => {
      for (const [key, value] of Object.entries(response)) {
        this.lstPizza.push(value);
      }
    });
  }

  ngOnInit() {
    console.log('oui');
    if (this.pizzas != null) {
      console.log('not null');
      this.pizzas = [];
      this.lstBasket = JSON.parse(localStorage.getItem('basket'));
      this.pizzas.forEach(pizza => this.lstBasket.push(JSON.parse(pizza)));
      this.nbPizza = this.pizzas.length;
    } else {
      this.pizzas = [];
    }
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
    localStorage.setItem('pizza', JSON.stringify(pizza));
    this.route.navigate(['/details']);
  }

  basket() {
    this.route.navigate(['/panier']);
  }

  pizzaAdd(pizza) {
    localStorage.setItem('pizza', JSON.stringify(pizza));
    this.pizzas.push(localStorage.getItem('pizza'));
    localStorage.setItem('basket', JSON.stringify(this.pizzas));

    this.nbPizza = this.nbPizza + 1;
  }
}
