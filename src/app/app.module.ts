import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';

// tslint:disable-next-line:import-spacing
import { HttpClientModule } from  '@angular/common/http';
import {AppComponent} from './app.component';
import { ModalPopupPage } from './modal-popup/modal-popup.page';

@NgModule({
  declarations: [AppComponent, ModalPopupPage],
  entryComponents: [ModalPopupPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
