import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean=false
  constructor() { }
  
  islogged(data:boolean):void{
    this.isLoggedIn=data;
  }

  getData():boolean{
    return this.isLoggedIn;
  }

}
