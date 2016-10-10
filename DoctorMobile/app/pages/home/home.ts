import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {DeviceOrientation} from "ionic-native/dist/index";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private platform: Platform) {
    platform.ready().then(() => {


      DeviceOrientation.getCurrentHeading().then(
        data => console.log(data),
        error => console.log(error)
      );

      let options = {
        frequency: 3000
      }; // Update every 3 seconds

      var watchID = DeviceOrientation.watchHeading(options).subscribe(
        (data) => {
          this.onSuccess(data);
          console.log("Finsihed Watching");
          console.log(data);

        }, (err) => {
          console.log("ERROR watching");
          console.log(err);
        }
      );


    })
  }

  refresh(){
    window['location'].reload();
  }


  onSuccess(heading){
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
  }

  onError(compassError){
    console.log('compass error:' +compassError.code);
  }

}
