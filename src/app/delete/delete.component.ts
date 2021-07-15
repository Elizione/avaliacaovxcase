import { Task } from './../model/task.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from './../service/app-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.less']
})
export class DeleteComponent implements OnInit {

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

  deleteTask(): void {
    this.appService.delete(this.taskId).subscribe(() => {
      this.appService.showMessage('Tarefa deletada com sucesso!')
    })
  }
}
