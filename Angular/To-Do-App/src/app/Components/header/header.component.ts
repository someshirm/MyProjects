import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor( private router:Router, private authService:AuthService){}
  logout() {
    console.log('logout clicked');
    sessionStorage.clear();
    this.authService.Logout();
    this.router.navigate(['/login']);

  }
}
