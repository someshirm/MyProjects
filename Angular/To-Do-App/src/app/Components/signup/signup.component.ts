import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Shared/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = new User();
  usersArr: User[] = [];
  constructor(private router:Router) {}

  submit() {
    //console.log(this.user);
    this.usersArr = JSON.parse(localStorage.getItem('users') as string) || [];
    this.usersArr.push(this.user);
    //console.log(this.usersArr);
    // const users=JSON.stringify(this.usersArr)
    localStorage.setItem('users', JSON.stringify(this.usersArr));
    alert("Registered Successfully");
    this.router.navigate(['/login']);
  }
}
