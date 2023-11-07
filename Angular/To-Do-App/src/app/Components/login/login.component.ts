import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Shared/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isvalidated: boolean = false;
  constructor(private router: Router, private authService:AuthService) {}

  login() {
    console.log(`Email : ${this.email}  Password : ${this.password}`);
    let users = JSON.parse(localStorage.getItem('users') as string) || [];
    users.forEach((user: User) => {
      if (this.email === user.email && this.password === user.password) {
        console.log('Validated successfully');
        this.isvalidated = true;
        sessionStorage.setItem('user',JSON.stringify(user));
        this.authService.Login();
        alert(' Logged in successfully');
       
        this.router.navigate(['/dashboard']);
      }
    });
    if (!this.isvalidated) {
      alert('Invalid credentials, Please Try Again !!');
      location.reload();
    }
  }

 
  
}
