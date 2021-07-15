import { Task } from './../model/task.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from './../service/app-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  //public taskList: Task[] = [];

  
  public task : Task = {
    title: '',
    description: ''
  }

  taskId: string

  constructor(private appService: AppServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id
    this.taskId = id
    this.appService.readById(id).subscribe(t => {
      this.task = t
    })
  }

  updateTask(): void {
    this.appService.update(this.task).subscribe(() => {
      this.appService.showMessage('Tarefa alterada com sucesso!')
    })
  }

  

}
