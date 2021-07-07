import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Task } from '../models/task';
import { TaskDetailDto } from '../models/taskDetailDto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = 'https://localhost:44331/api/';
  constructor(private httpClient:HttpClient) { }
  getTasks():Observable<ListResponseModel<TaskDetailDto>>{
    let newPath=this.apiUrl+"tasks/gettasksdetails"
    return this.httpClient.get<ListResponseModel<TaskDetailDto>>(newPath)
    
  }
  getAllTasks():Observable<ListResponseModel<Task>>{
    let newPath=this.apiUrl+"tasks/getall"
    return this.httpClient.get<ListResponseModel<Task>>(newPath)
    
  }
  add(task:Task):Observable<ResponseModel>{
    let newPath=this.apiUrl+"tasks/add"
    return this.httpClient.post<ResponseModel>(newPath,task)
  }
  update(task:Task):Observable<ResponseModel>{
    let newPath=this.apiUrl+"tasks/update"
    return this.httpClient.post<ResponseModel>(newPath,task)
  }
  delete(task:Task):Observable<ResponseModel>{
    let newPath=this.apiUrl+"tasks/delete"
    return this.httpClient.post<ResponseModel>(newPath,task)
  }
  getEmployeeId(employeeId:number):Observable<ListResponseModel<Task>>{
    let newPath=this.apiUrl+"gettasksdetailsbyemployeeid?employeeId="+employeeId
    return this.httpClient.get<ListResponseModel<Task>>(newPath)
  }
  getTask(taskId:number):Observable<SingleResponseModel<Task>>{
    let newPath=this.apiUrl+"tasks/getbyid?taskid="+taskId
    return this.httpClient.get<SingleResponseModel<Task>>(newPath)
  }
}

