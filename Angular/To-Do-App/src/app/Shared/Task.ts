export class Task {
  taskId: number;
  taskName: string;
  taskDate: Date;
  isImportant: boolean;
  isCompleted: boolean;
  isEdit:boolean;
  reminder?: Date;

  constructor() {
    this.taskId = 0;
    this.taskName =  '';
    this.taskDate =  new Date();
    this.isImportant=false;
    this.isCompleted=false;
    this.isEdit=false;
  }

   
}
