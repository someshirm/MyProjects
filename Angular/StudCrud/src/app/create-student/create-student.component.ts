import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
student:Student=new Student();
 
constructor(private studService:StudentService, private router:Router){}

submit(){
  console.log(this.student);
  this.saveStudent();
}

saveStudent(){
 this.studService.createStudent(this.student).subscribe(data=>{
  console.log(data);
  this.gotoList();
 }
  
 );
 
 
}

gotoList(){
this.router.navigate(['/list']);
}

}
