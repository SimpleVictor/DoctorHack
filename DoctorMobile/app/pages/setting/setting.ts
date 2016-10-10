import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FoodService} from "../../providers/foodservice";

/*
  Generated class for the SettingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/setting/setting.html',
})
export class SettingPage {

  constructor(private navCtrl: NavController, private foodservice: FoodService) {

  }

  deleteTable(){
    this.foodservice.deleteTable();
  }

}
