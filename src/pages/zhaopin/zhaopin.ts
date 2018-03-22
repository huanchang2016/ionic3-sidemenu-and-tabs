import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ZhaopinPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhaopin',
  templateUrl: 'zhaopin.html'
})
export class ZhaopinPage {

  jobsRoot = 'JobsPage'
  companysRoot = 'CompanysPage'
  jobMapRoot = 'JobMapPage'
  jobFairRoot = 'JobFairPage'


  constructor(public navCtrl: NavController) {}

}
