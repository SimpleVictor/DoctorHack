import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {FoodService} from "./providers/foodservice";
import {ServerComponent} from "./providers/server";
import {EatService} from "./providers/eatservice";
import {HomePage} from "./pages/home/home";


@Component({
  providers: [FoodService, ServerComponent, EatService],
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform, public foodservice: FoodService) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);