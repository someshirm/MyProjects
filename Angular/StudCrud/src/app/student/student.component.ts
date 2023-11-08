import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  students:Student[] | undefined;
 
  constructor( private studentService:StudentService, private router:Router){}

ngOnInit(): void {
   this.getStudents();
}

private getStudents(){
  this.studentService.getStudentsList().subscribe(data=>this.students=data)
}

deleteStudent(roll:number){
  this.studentService.delete(roll).subscribe(data=>{
    console.log(data);
    this.getStudents();
    
  });
}

updateStudent(roll:number){
this.router.navigate(['/update',roll]);
}





}
