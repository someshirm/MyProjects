import { Task } from './Task';

export class User {
  name: string;
  email: string;
  password: string;
  tasks: Task[] = [];
  

  constructor() {
    this.name = '';
    this.email =  '';
    this.password =  '';
     
  }
}
