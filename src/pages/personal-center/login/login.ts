import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
    private events: Events
  ) {}

  ionViewDidLoad() {
    this.listenEvents();
    this.listenEventsForgetPassword();
    console.log('login----> 账号登录页面加载事件！');
  }
  ionViewWillUnload() {
    this.events.unsubscribe('toLogin');
    this.events.unsubscribe('forgetPassword');
  }
  listenEvents() {
    this.events.subscribe('toHome', () => {
      this.navCtrl.setRoot('HomePage');
    });
  }
  listenEventsForgetPassword() {
    this.events.subscribe('forgetPassword', () => {
      this.navCtrl.setRoot('ModifyPasswordPage');
    });
  }
}
