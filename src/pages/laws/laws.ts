import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'laws.html'
})
export class LawsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  tapend = () => {
    this.navCtrl.setRoot('HomePage');
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LawsPage, {
      item: item
    });
  }
}