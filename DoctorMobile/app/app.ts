import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import {StatusBar, DeviceOrientation} from 'ionic-native';
import {HomePage} from "./pages/home/home";

declare var cordova;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();





      let tapEnabled = false;
      let dragEnabled = false;
      let toBack = true;
      let rect = {
        x: 0,
        y: 0,
        width: platform.width(),
        height: platform.height()
      };

      cordova.plugins.camerapreview.startCamera(rect, "rear", tapEnabled, dragEnabled, toBack);


      DeviceOrientation.

      DeviceOrientation.getCurrentHeading().then(
        data => console.log(data),
        error => console.log(error)
      );

// Watch the device compass heading change

      var subscription = DeviceOrientation.watchHeading()



    });
  }


}

ionicBootstrap(MyApp);
