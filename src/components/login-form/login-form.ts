import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  text: string;

  constructor(
    private authProvider: AuthProvider
  ) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }

  public logIn() {
    this.authProvider.logIn();
  }

}
