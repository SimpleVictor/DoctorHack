import { Component } from '@angular/core';
import {AlertController, NavController} from "ionic-angular/index";
import {PreOrderComponent} from "../preorder/preorder";

@Component({
  templateUrl: 'build/pages/alexa/alexa.component.html',
})
export class AlexaMenuComponent {

  orderlist:any[] = [];

  constructor(private nav: NavController, private alertCtrl: AlertController) {
  }

    displayNumberBox(name, price){
      var obj = {
        name: name,
        price: price,
        amount: ""
      };
      console.log(name, price);
      let prompt = this.alertCtrl.create({
        title: 'How Many',
        // message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: 'num',
            type: 'number',
            placeholder: 'number of order'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Add',
            handler: data => {
              obj.amount = data.num;
              this.orderlist.push(obj);
            }
          }
        ]
      });
      prompt.present();
    }

  openOrderList(){
    this.nav.push(PreOrderComponent, {myObj: this.orderlist});
  }




}

