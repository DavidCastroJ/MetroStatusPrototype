import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';

/**
 * Generated class for the ProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-form',
  templateUrl: 'profile-form.html'
})
export class ProfileFormComponent {

  text: string;

  constructor(
    private authProvider: AuthProvider
  ) {
    console.log('Hello ProfileFormComponent Component');
    this.text = 'Hello World';
  }

  logOut() {
    this.authProvider.logOut();
  }

}
