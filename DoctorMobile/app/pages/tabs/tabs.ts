import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {MenuPage} from "../menu/menu";
import {SettingPage} from "../setting/setting";
import {BarcodePage} from "../barcode/barcode";

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = MenuPage;
    this.tab3Root = BarcodePage;
    this.tab4Root = SettingPage;
  }
}
