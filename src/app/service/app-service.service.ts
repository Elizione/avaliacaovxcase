import { Task } from './../model/task.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  
  baseurl = "http://localhost:3000/tarefas"

  constructor(private http: HttpClient) { }

  showMessage(msg:string):void{
    console.log(msg)
  }

  create(task: Task):Observable<Task>{
    return this.http.post<Task>(this.baseurl, task)
  }

  read(): Observable<Task[]>{
    return this.http.get<Task[]>(this.baseurl)
  }

  readById(id: string): Observable<Task>{
    const url = `${this.baseurl}/${id}`
    return this.http.get<Task>(url)
  }

  update(task: Task):Observable<Task>{
    const url = `${this.baseurl}/${task.id}`
    return this.http.put<Task>(url, task)
  }

  delete(id: string):Observable<Task>{
    const url = `${this.baseurl}/${id}`
    return this.http.delete<Task>(url)
  }
}
