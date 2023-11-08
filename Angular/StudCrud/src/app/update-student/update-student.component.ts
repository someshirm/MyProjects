import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../Services/student.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
student:Student=new Student();
roll:number=0;
constructor(private studservice:StudentService , private route:ActivatedRoute, private router:Router){}

ngOnInit(): void {
  this.roll=this.route.snapshot.params['roll'];
    this.studservice.getStudentById(this.roll).subscribe(data=>this.student=data);

}
 
update(){
this.studservice.update(this.roll,this.student).subscribe(data=>{
this.gotoList();
})
}

gotoList(){
  this.router.navigate(['/list']);
  }

}
