import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor() {}
  Login() {
    this.isLoggedIn = true;
  }

  Logout() {
    this.isLoggedIn = false;
  }

  isLogin():boolean{
    return this.isLoggedIn;
  }
}
