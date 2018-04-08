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
    console.log('login----> 账号登录页面加载事件！');
  }
  ionViewWillUnload() {
    this.events.unsubscribe('toLogin');
    // console.log('界面销毁');
  }
  listenEvents() {
    this.events.subscribe('toHome', () => {
      this.navCtrl.setRoot('HomePage');
      // this.nav.pop(); 使用这种方式也可以，但是会在登录框中默认填上值
      // console.log('返回登录');
    });
  }
}
