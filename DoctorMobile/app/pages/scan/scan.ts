import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BarcodeData} from "../home/home";

@Component({
  templateUrl: 'build/pages/scan/scan.html',
})
export class ScanPage {
  barcodeData: BarcodeData;
  constructor(private nav: NavController, navParams: NavParams) {
    this.barcodeData = navParams.get('details');
  }

  ionViewLoaded(){
    console.log(this.barcodeData);
  }

}
