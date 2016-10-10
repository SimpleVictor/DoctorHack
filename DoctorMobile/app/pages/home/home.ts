import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {DeviceOrientation} from "ionic-native/dist/index";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private platform: Platform) {
    // platform.ready().then(() => {


    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");






    // })
  }

  refresh(){
    console.log("bang");
    window['location'].reload();
  }

  startCompass(){
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    let options = {
      frequency: 3000
    }; // Update every 3 seconds
    var watchID = DeviceOrientation.watchHeading(options).subscribe(
      (data) => {
        console.log("Finsihed Watching");
        console.log(data);
        this.onSuccess(data);

      }, (err) => {
        console.log("ERROR watching");
        console.log(err);
      }
    );
  }

  devicerdy(){
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    DeviceOrientation.getCurrentHeading().then(
      (data) => console.log(data),
      (err) => console.log(err)
    );

  }

  onSuccess(heading){
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
  }

  onError(compassError){
    console.log('compass error:' +compassError.code);
  }

}
