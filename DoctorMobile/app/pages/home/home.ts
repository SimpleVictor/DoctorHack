import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {DeviceOrientation} from "ionic-native";

declare var navigator;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private platform: Platform) {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log(navigator);
      console.log("Device is rdy");
    }

  }

  Spinme(){
    var element = document.getElementById('spinMe');
    let randomNum = Math.round(Math.random()*359);
    console.log(randomNum);
    element.style.webkitTransform = `rotate(${randomNum}deg)`;
    element.style.transform = `rotate(${randomNum}deg)`;
  }

  refresh(){
    console.log("bang");
    window['location'].reload();
  }

  startCompass(){
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    let options = {
      frequency: 300
    }; // Update every 3 seconds
    var watchID = navigator.compass.watchHeading(this.onSuccess,this.onError, options);
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
    element.innerHTML = 'Heading: ' + Math.round(heading.magneticHeading)+ ' degrees';
    var element = document.getElementById('spinMe');
    element.style.webkitTransform = `rotate(${heading.magneticHeading}deg)`;
    element.style.transform = `rotate(${heading.magneticHeading}deg)`;
  }

  onError(compassError){
    console.log('compass error:' +compassError.code);
  }

}
