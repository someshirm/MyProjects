import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './Services/login.service';


@Injectable({
  providedIn:'root'
})


export class authGuard implements CanActivate{
constructor(private loginService:LoginService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ):  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(this.loginService.getData()==true){
        return true;
      }
      else{
        return false;
      }
     
  }

  
}
