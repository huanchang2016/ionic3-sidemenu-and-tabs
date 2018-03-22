import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { LoginAccountLoginComponent } from './login-account-login/login-account-login';
@NgModule({
	declarations: [LoginComponent,
    LoginAccountLoginComponent],
	imports: [],
	exports: [LoginComponent,
    LoginAccountLoginComponent]
})
export class ComponentsModule {}
