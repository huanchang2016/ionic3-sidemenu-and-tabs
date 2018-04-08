import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, Events } from 'ionic-angular';

/*
  Generated class for the LoginRegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginRegisterProvider {

  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController,
    private events : Events
  ) {
    console.log('Hello LoginRegisterProvider Provider');
  }

  console = (str)=>{
    console.log(str);
  }

  // go back to homepage
  backToHome(){
    this.events.publish('toHome');
  }
  showAlert = (opt) => {
    let alert = this.alertCtrl.create({
      title: opt.title,
      subTitle: opt.subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
