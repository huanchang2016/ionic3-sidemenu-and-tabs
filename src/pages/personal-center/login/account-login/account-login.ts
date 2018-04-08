import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginRegisterProvider } from '../../../../providers/login-register/login-register';

/**
 * Generated class for the AccountLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-login',
  templateUrl: 'account-login.html',
})
export class AccountLoginPage {
  public phone:string = '';
  public password: string = '';
  public isLogin:boolean = false;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginRegisterService: LoginRegisterProvider
  ) { }


  login = () => {
    if(this.phone == ''){
      this.loginRegisterService.showAlert({
        title: "错误",
        subTitle: '账号信息不能为空！',
      });
      return false;
    }
    if(this.password == ''){
      this.loginRegisterService.showAlert({
        title: "错误",
        subTitle: '密码不能为空！',
      });
      return false;
    }
    this.loginRegisterService.loginInUserAccount({
      phone: this.phone,
      password: this.password
    }).then(res=>{
      if(res['code'] === 1){
        this.loginRegisterService.backToHome();
      }else{
        this.loginRegisterService.showAlert({
          title: '登录失败',
          subTitle: res['msg']
        })
      }
    })
  }
  forgetPassword(){
    console.log('忘记密码!');
  }

  checkInputs = () => {
    if(this.phone !== '' && this.password !== ''){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }
}
