import { AppServiceService } from './../service/app-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  public taskList: Task[] = [];

  /*
  public task : Task = {
    title: '',
    description: ''
  }*/

  constructor(private appService: AppServiceService) { }

  ngOnInit() {
    this.appService.read().subscribe(tasks=>{
      this.taskList = tasks
      console.log(this.taskList)
    })
  }

  addTask() {
    this.taskList.push(new Task());
    console.log(this.taskList)
  }

  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
  }

  messageTask(msg: string) {
    this.appService.showMessage(msg)
  }

  saveTask(task:Task): void {
    const newTask = this.taskList.find(t=>t.id == task.id)
    console.log(newTask)
    this.appService.create(newTask).subscribe(() => {
      this.messageTask("Salvo")
    })
    
  }
}



