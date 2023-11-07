import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { Injectable, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const authService=inject(AuthService);
  if(authService.isLogin()){
    return true;
  }else{
    alert('Login first');
    router.navigate(['/login']);
    return false;
  }
  
  
};

// export class authGuard implements CanActivate{
//   constructor(private authService:AuthService,private router:Router){}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (this.authService.isLogin()) {
//       return true;
//     } else {
//       alert('logged in first');
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
  
// }
