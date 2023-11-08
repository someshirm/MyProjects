import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 private baseurl="http://localhost:8060/list";
 private saveurl="http://localhost:8060/save";
 private deleteurl="http://localhost:8060/delete"
 private updateurl="http://localhost:8060/update"
 private getUrl="http://localhost:8060/getById"
  constructor(private http:HttpClient) { }

  getStudentsList():Observable<Student[]>{
    return this.http.get<Student[]>(this.baseurl);

  }
  
  createStudent(student:Student):Observable<Object>{
   return this.http.post( `${this.saveurl}`, student);
  }

  delete(roll:number):Observable<Object>{
    return this.http.delete(`${this.deleteurl}/${roll}`);
    
  }

  update(roll:number, student:Student):Observable<Object>{
    return this.http.put(`${this.updateurl}/${roll}`,student);
  }

  getStudentById(roll:number):Observable<Student>{
    return this.http.get<Student>(`${this.getUrl}/${roll}`);

  }

}
