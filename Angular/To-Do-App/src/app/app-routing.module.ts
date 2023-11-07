import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path:'' , pathMatch:'full',redirectTo:'login'},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'dashboard' , component:DashboardComponent,canActivate:[authGuard]},
  {path:'header',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
