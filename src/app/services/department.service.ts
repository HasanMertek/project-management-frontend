import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  apiUrl = 'https://localhost:44331/api/';
  constructor(private httpClient: HttpClient) {}

  getAllDepartments():Observable<ListResponseModel<Department>>{
    let newPath = this.apiUrl+"departments/getall";
    return this.httpClient.get<ListResponseModel<Department>>(newPath);
  }
  add(department:Department):Observable<ResponseModel>{
    let newPath=this.apiUrl+"departments/add";
    return this.httpClient.post<ResponseModel>(newPath,department)
  }
  delete(department:Department):Observable<ResponseModel>{
    let newPath=this.apiUrl+"departments/delete";
    return this.httpClient.post<ResponseModel>(newPath,department)
  }
  update(department:Department):Observable<ResponseModel>{
    let newPath=this.apiUrl+"departments/update";
    return this.httpClient.post<ResponseModel>(newPath,department)
  }
  getDepartment(departmentId:number):Observable<SingleResponseModel<Department>>{
    let newPath=this.apiUrl+"departments/getbyid?departmentId="+departmentId
    return this.httpClient.get<SingleResponseModel<Department>>(newPath);
  }
}
