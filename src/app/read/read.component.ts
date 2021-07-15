import { Task } from './../model/task.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from './../service/app-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.less']
})
export class ReadComponent implements OnInit {

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
}
