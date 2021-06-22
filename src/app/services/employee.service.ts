import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeDto } from '../models/employeeDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'https://localhost:44331/api/';
  constructor(private httpClient: HttpClient) {}
  getAllEmployee(): Observable<ListResponseModel<EmployeeDto>> {
    let newPath = this.apiUrl + 'Employees/getemployeesdetails';
    return this.httpClient.get<ListResponseModel<EmployeeDto>>(newPath);
  }
  getEmployeesByDepartment(departmentId:number):Observable<ListResponseModel<EmployeeDto>>{
    let newPath=this.apiUrl+'Employees/getbydepartmentid?departmentId='+departmentId;
    return this.httpClient.get<ListResponseModel<EmployeeDto>>(newPath);
  }
  add(employee:Employee):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+'Employees/add',employee);
  }
}

