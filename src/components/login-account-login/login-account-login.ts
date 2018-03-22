import { Component } from '@angular/core';

/**
 * Generated class for the LoginAccountLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-account-login',
  templateUrl: 'login-account-login.html'
})
export class LoginAccountLoginComponent {

  text: string;

  constructor() {
    console.log('Hello LoginAccountLoginComponent Component');
    this.text = 'Hello World';
  }

}
