import { Component, OnInit } from '@angular/core';
import {NavParams, AlertController} from "ionic-angular/index";
import {ServerComponent} from "../../providers/server";
import {FoodService} from "../../providers/foodservice";


@Component({
    templateUrl: 'build/pages/preorder/preorder.html'
})
export class PreOrderComponent implements OnInit {

  mydata;

  constructor(private navParams: NavParams, private myserver: ServerComponent, private foodService: FoodService, private alertCtrl: AlertController) { }



    ngOnInit() {
      this.mydata = this.navParams.get("myObj");
    }

    sendData(){

      let obj;

      let prompt = this.alertCtrl.create({
        title: 'Name your Barcode',
        // message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'enter barcode title here'
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
              obj = {
                name: data.name,
                food: this.mydata
              };
              console.log(obj);

              this.myserver.generateBarcode(obj)
                .subscribe(
                  data => {
                    console.log("sucessfully added data into firebase");
                    let s = data.request.uri.path;
                    let a = s.substring(1, s.length - 5);
                    obj.id = a;
                    this.foodService.addBarcodeRecent(obj).then(
                      data => {
                        console.log("SUCCESS ADDING BARCODE ID TO SQL");
                      }, err => {
                        console.log("NOOO THERE WAS AN ERROR");
                        console.log(err);
                      }
                    )
                    console.log(a);
                  }, err => {
                    console.log(err);
                  }
                );

            }
          }
        ]
      });
      prompt.present();













    }



}
