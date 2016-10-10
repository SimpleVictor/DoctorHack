import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {ScanPage} from "../scan/scan";
import {FoodService} from "../../providers/foodservice";
import {IndividualBarcode} from "../individualbarcode/individualbarcode";


export class BarcodeData {
  constructor(
    public text: String,
    public format: String
  ) {}
}

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public foodservice: FoodService) {

  }
  activateScan(){
    console.log("works");
    BarcodeScanner.scan({
      "preferFrontCamera": false,
      "showFlipCameraButton" : true
    })
      .then((result) => {
        if (!result.cancelled) {
          const barcodeData = new BarcodeData(result.text, result.format);
          this.scanDetails(barcodeData);
        }
      })
      .catch((err) => {
        alert(err);
      })
  }


  scanDetails(details) {
    this.navCtrl.push(IndividualBarcode, {id: details.text, is_scan: true});
  }


  grabFood(){
    this.foodservice.getData()
      .then(
        result => {
          console.log("here's your data");
          console.log(result);
        }, err => {
          console.log("zaaam.... that suck's. It failed to get data");
          console.log(err);
        }
      );
  }

  deleteTable(){
    this.foodservice.deleteTable()
      .then(
        result => {
          console.log("Deleted Table success!");
        }, err => {
          console.log("Problem deleting table");
          console.log(err);
        }
      );
  }



}
