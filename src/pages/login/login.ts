import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the LoginPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  accountLoginRoot = 'AccountLoginPage'
  codeLoginRoot = 'CodeLoginPage'


  constructor(public navCtrl: NavController) {}

}
