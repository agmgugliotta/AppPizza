import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})
export class ModalPopupPage implements OnInit {

  lstPizza: Array<object> = [];
  pizzas: any[] = [];

  constructor(public navParams: NavParams,
              public modalCtrl: ModalController,
              private http: HttpClient,
              private route: Router) {
    this.pizzas = JSON.parse(localStorage.getItem('basket'));
    this.pizzas.forEach(pizza => this.lstPizza.push(JSON.parse(pizza)));
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  backHome() {
    localStorage.setItem('basket', JSON.stringify(this.lstPizza));
    this.route.navigate(['/tab1']);
  }

  pizzaRemove(pizza) {
    const index =  this.lstPizza.indexOf(pizza);
    if (index > -1) {
      this.lstPizza.splice(index, 1);
    }
    localStorage.setItem('basket', JSON.stringify(this.lstPizza));
  }

  quantityPizza() {
    // TO DO
  }

}
