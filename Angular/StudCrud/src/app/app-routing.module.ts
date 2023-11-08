import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"list", component:StudentComponent, canActivate:[authGuard]},
  {path:"AddStudent", component:CreateStudentComponent, canActivate:[authGuard]},
  {path:"update/:roll", component:UpdateStudentComponent, canActivate:[authGuard]},
  {path:"login",component:LoginComponent},
  {path:'', pathMatch:'full', redirectTo:"login"}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
