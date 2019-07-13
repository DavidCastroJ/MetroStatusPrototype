import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  public logIn() {
    console.log('logIn');
    this.isLoggedIn = true;
  }

  public logOut() {
    console.log('logOut');
    this.isLoggedIn = false;
  }

}
