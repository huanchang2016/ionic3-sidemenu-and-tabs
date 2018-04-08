import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JobMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-map',
  templateUrl: 'job-map.html',
})
export class JobMapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tapend = () => {
    // this.navCtrl.setRoot('HomePage');
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JobMapPage');
  }

}
