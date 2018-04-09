import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeServiceProvider {

  public url = 'http://localhost';
  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    console.log('Hello HomeServiceProvider Provider');
  }


  // home page jobs show
  getLatestJobs(opt){
    let _url = '/api/latest_jobs';
    return this.httpClientRequest(_url, opt).then(res=>{
      return res;
    })
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
