import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private router:Router, private loginService:LoginService){}

  email:string='';
  password:string="";
  isLoggedIn:boolean=false;
  errorMsg:string=""

  
  login(){
    if (this.email=="admin@gmail.com" && this.password=="123") {
      this.isLoggedIn=true ;   
      this.loginService.islogged(this.isLoggedIn);
    
      alert("Logged In Successfully");
      this.router.navigate(['/list']) ; 
    
    } else {
      this.errorMsg="Invalid email or Password....Please retry!!!";
      this.email='';
      this.password='';
    }
  }



}
