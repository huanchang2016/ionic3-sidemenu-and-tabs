import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginRegisterProvider } from '../../../../providers/login-register/login-register';
import $  from 'jquery';

/**
 * Generated class for the CodeLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code-login',
  templateUrl: 'code-login.html',
})
export class CodeLoginPage {
  public phone: string = '';
  public code: string = '';
  public coding: boolean = false;
  public seconds : number;

  public submiting:boolean = false;// 信息是否全部填写
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginRegisterService: LoginRegisterProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodeLoginPage');
  }

  loginMsgSubmit = () => {
    this.checkedInputs();
    this.loginRegisterService.console('跳转登录');
    if(this.submiting){
      this.loginRegisterService.lgoinInUserThroughMsg({
        phone: this.phone,
        code: this.code
      }).then(res=>{
        if(res['code']=== 1){
          this.navCtrl.push('LoginPage'); // ionic 路由跳转
        }else{
          this.loginRegisterService.showAlert({
            title: '登录失败',
            subTitle: res['msg']
          })
        }
      })
    }else{
      this.loginRegisterService.showAlert({
        title: '错误',
        subTitle: '信息未完全填写'
      })
    }
  }

  sendCode = (btn) => {
    if(!this.phone){
      this.loginRegisterService.showAlert({
        title: '操作错误',
        subTitle: '手机号码不能为空！'
      });
    }else{
      this.loginRegisterService.sendMessage({phone: this.phone}).then(res=>{
        if(res['code'] === 1){
          this.setTimeOutFn(5);
        }else{
          this.loginRegisterService.showAlert({
            title: '发送失败',
            subTitle: res['msg']
          })
        }
      })
    }
  }

  // 验证码倒计时发送
  setTimeOutFn(t){
    this.coding = true;
    this.seconds = t;
    let time = setInterval(() =>{
      this.seconds--;
      if(this.seconds <= 0){
        this.coding = false;
        this.seconds = t;
        clearInterval(time);
      }
    }, 1000)
  }

  checkedInputs = () => {
    if(this.phone === ''){
      $('#phone').addClass('danger-text');
      this.submiting = false;
      return;
    }else{
      $('#phone').removeClass('danger-text');
    }
    if(this.code === ''){
      $('#code').addClass('danger-text');
      this.submiting = false;
      return;
    }else{
      $('#code').removeClass('danger-text');
    }
    this.submiting = true;
  }
}
