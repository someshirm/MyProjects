import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Shared/Task';
import { User } from 'src/app/Shared/User';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User = new User();
  usersArr: User[] = [];
  task: Task = new Task();
  usertasks: Task[] = [];
  icon = faStar;

  ngOnInit(): void {
    this.usersArr = JSON.parse(localStorage.getItem('users') as string) || [];
    this.user = JSON.parse(sessionStorage.getItem('user') as string);
    this.usertasks = this.user.tasks;
    console.log(this.user);

    console.log('Oninit called');
  }



  submit() {
    this.usersArr.forEach((element) => {
      if (
        this.user.email === element.email &&
        this.user.password === element.password
      ) {
        this.usertasks.push(this.task);
        element.tasks = this.usertasks;
        console.log(element);
        sessionStorage.setItem('user', JSON.stringify(this.user));
        console.log('user is set to the sessionstorage');
        this.task = new Task();
        localStorage.setItem('users', JSON.stringify(this.usersArr));
        console.log(this.usersArr);
      }
    });
  }

  deleteTask(index: number) {
    if (index >= 0 && index < this.usertasks.length) {
      this.usertasks.splice(index, 1);
      console.log('Deleted Successfully');
      this.setChangesToLocalStorage();
    }
  }

  editTask(index: number) {
    this.usertasks[index].isEdit = true;
  }

  markAsImportant(index: number) {
    if (index >= 0 && index < this.usertasks.length) {
      this.usertasks[index].isImportant = true;

      console.log('Marked as Important');
      this.setChangesToLocalStorage();
    }
  }

  markAsCompleted(index: number) {
    if (index >= 0 && index < this.usertasks.length) {
      this.usertasks[index].isCompleted = true;
      console.log('Marked as Completed');
      this.setChangesToLocalStorage();
    }
  }

  save(editedtask:Task,index:number) {
    console.log(editedtask,index);
    editedtask.isEdit=false;
    this.usertasks[index]=editedtask;
    this.setChangesToLocalStorage();
    
  }

  setChangesToLocalStorage() {
    this.user.tasks = this.usertasks;
    sessionStorage.setItem('user',JSON.stringify(this.user));
    console.log(this.usertasks);
    
    const userIndex = this.usersArr.findIndex(
      (u) => u.email === this.user.email
    );
    if (userIndex != -1) {
      this.usersArr[userIndex] = this.user;
      console.log('Set changes triggerd  : ' + this.user);
      localStorage.setItem('users', JSON.stringify(this.usersArr));
    }
  }
}
