import { Component } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  logout() {
    this.loginService.islogged(false);
    this.router.navigate(['/login']);
    alert('Logged out Successfully ');
  }
}
