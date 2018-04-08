import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import $  from 'jquery';
import { LoginRegisterProvider } from '../../providers/login-register/login-register';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public options:Object ={
    type: '',
    phone: '',
    password: '',
    password_confirmatio: '',
    code: '',
  };
  public type: string = '';
  public phone: string = '';
  public password: string = '';
  public password_confirmation:string = '';
  public code: string = '';
  public coding: boolean = false;
  public seconds : number = 5;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginRegisterService: LoginRegisterProvider
  ) { }

  ionViewDidLoad() {
    console.log('register ---->>页面加载后就会产生的事件！');
  }

  public submiting:boolean = false;// 信息是否全部填写
  registerSubmit = () => {
    this.checkedInputs();
    this.loginRegisterService.console('跳转登录');
    this.navCtrl.push('LoginPage'); // ionic 路由跳转
    if(this.submiting){
      console.log('submiting');
      this.options = {
        type: this.type,
        phone: this.phone,
        password: this.password,
        password_confirmatio: this.password_confirmation,
        code: this.code,
      }
    }
  }

  sendCode = (btn) => {
    this.coding = true;
    let time = setInterval(() =>{
      this.seconds--;
      if(this.seconds <= 0){
        this.coding = false;
        this.seconds = 5;
        clearInterval(time);
      }
    }, 1000)
  }

  typeChange = () => {
    if(this.type !== ''){
      $("#type").removeClass('danger-text');
    }
  }

  checkedInputs = () => {
    if(this.type === ''){
      $('#type').addClass('danger-text');
      this.submiting = false;
      return;
    }
    if(this.phone === ''){
      $('#phone').addClass('danger-text');
      this.submiting = false;
      return;
    }else{
      $('#phone').removeClass('danger-text');
    }
    if(this.password === ''){
      $('#password').addClass('danger-text');
      this.submiting = false;
      return;
    }else{
      $('#password').removeClass('danger-text');
    }
    if(this.password_confirmation === '' && this.password_confirmation !== this.password){
      $('#password_confirmation').addClass('danger-text');
      this.submiting = false;
      return;
    }else{
      $('#password_confirmation').removeClass('danger-text');
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
