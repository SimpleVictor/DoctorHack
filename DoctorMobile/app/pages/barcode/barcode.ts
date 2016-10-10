import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {FoodService} from "../../providers/foodservice";
import {IndividualBarcode} from "../individualbarcode/individualbarcode";

/*
  Generated class for the BarcodePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/barcode/barcode.html',
})
export class BarcodePage {

  whichtab:string = "orders";

  ordersData: any[] = [];
  scannedData: any[] = [];
  savedData: any[] = [];


  constructor(private navCtrl: NavController, private foodservice : FoodService, private modalCtrl: ModalController) {

  }
  ionViewWillEnter(){
    this.ordersData = [];
    this.scannedData= [];
    this.savedData= [];
    this.foodservice.getAllBarCodeRecent().then(
      data => {
        for(let i = 0; i < data.res.rows.length ; i++){
          if(data.res.rows[i].is_recent === "true"){
            this.ordersData.push(data.res.rows[i])
          }

          if(data.res.rows[i].is_scanned === "true"){
            this.scannedData.push(data.res.rows[i]);
          }

          if(data.res.rows[i].is_saved === "true"){
            this.savedData.push(data.res.rows[i]);
          }

          let check = i + 1;
          if(data.res.rows.length === check){

              this.ordersData.reverse();
              this.scannedData.reverse();
              this.savedData.reverse();

              console.log(this.ordersData)
              console.log(this.scannedData)
              console.log(this.savedData)
          };
        };
      }, err => {
        console.log("THERE WAS AN ERROR");
        console.log(err);
      }
    );
  }

  displayBox(id){
    let modal = this.modalCtrl.create(IndividualBarcode, {id: id});
    modal.present();
  }

  saveId(id){
    console.log(id);
  }


  /*DELETE*/
  deleteSaved(id){
    console.log(id);
  }

  deleteScanned(id){
    console.log(id);
  }

  deleteOrders(id){
    console.log("delete only");
    console.log(id);
  }






}
