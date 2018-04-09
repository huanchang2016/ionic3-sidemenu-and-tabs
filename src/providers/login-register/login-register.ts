import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, Events } from 'ionic-angular';

@Injectable()
export class LoginRegisterProvider {
  public url = 'http://localhost';
  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController,
    private events : Events
  ) {
    console.log('Hello LoginRegisterProvider Provider');
  }
  // user  register
  registerAccount(opt){
    let _url = '/api/register';
    return this.httpClientRequest(_url, opt).then(res=>{
      return res;
    })
  }
  // modify password 
  modifyUserPassword(opt){
    let _url = '/api/forget_password';
    return this.httpClientRequest(_url, opt).then(res=>{
      return res;
    })
  }
  //  checknumber be send
  sendMessage(opt){
    let _url = '/api/send_msg';
    return this.httpClientRequest(_url, opt).then(res=>{
      return res;
    })
  }
  // user login in
  loginInUserAccount(opt){
    let _url = '/api/login';
    return this.httpClientRequest(_url, opt).then(res=>{
      return res;
    })
  }
  // user login in through checkNumber
  lgoinInUserThroughMsg(opt){
    let _url = '/api/login_code';
    return this.httpClientRequest(_url, opt).then(res=>{
      return res;
    })
  }
  // user login out
  loginOut(){
    let _url = '/api/logout';
    return this.httpClientRequest(_url).then(res=>{
      return res;
    })
  }
  

  // go to forgetPassword page
  goToForgetPasswordPage(){
    this.events.publish('forgetPassword');
  }

  // go back to homepage
  backToHome(){
    this.events.publish('toHome');
  }
  // HttpClient Request
  httpClientRequest = (url, _opt?) => {
    let _url = this.url + url;
    let opt = _opt || {};
    return this.http.post(_url, opt).toPromise().then(res=>{
      return res;
    })
  }
  // Alerts
  showAlert = (opt) => {
    let alert = this.alertCtrl.create({
      title: opt.title,
      subTitle: opt.subTitle,
      buttons: ['确定']
    });
    alert.present();
  }
}
