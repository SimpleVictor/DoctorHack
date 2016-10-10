import { Component, OnInit } from '@angular/core';
import {ViewController, NavParams} from "ionic-angular/index";
import {ServerComponent} from "../../providers/server";
import {FoodService} from "../../providers/foodservice";

@Component({
    providers: [ServerComponent, FoodService],
    templateUrl: 'build/pages/individualbarcode/individualbarcode.html',
})
export class IndividualBarcode{

  id;
  singleData;

  constructor(private viewCtrl: ViewController, private navParams: NavParams, private myserver: ServerComponent, private foodservice: FoodService) {

    }

    ionViewWillEnter(){
      this.id = this.navParams.get("id");

      let isScan = this.navParams.get("is_scan");
      if(isScan){
        console.log("This was scanned and not generate from the menu tab");
        this.foodservice.addBarcodeScanned(this.id);
      }

      this.myserver.getFirebaseID(this.id).subscribe(
        data => {
          this.singleData = data;
          console.log(data);
        }, err => {
          console.log(err);
        }
      )
    }

    popModal(){
      this.viewCtrl.dismiss()
    }

}
