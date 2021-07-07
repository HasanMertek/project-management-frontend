import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeDelete } from '../models/employeeDelete';
import { EmployeeDto } from '../models/employeeDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

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
  getEmployees(): Observable<ListResponseModel<Employee>> {
    let newPath = this.apiUrl + 'Employees/getall';
    return this.httpClient.get<ListResponseModel<Employee>>(newPath);
  }
  getEmployeesByDepartment(departmentId:number):Observable<ListResponseModel<EmployeeDto>>{
    let newPath=this.apiUrl+'Employees/getbydepartmentid?departmentId='+departmentId;
    return this.httpClient.get<ListResponseModel<EmployeeDto>>(newPath);
  }
  add(employee:Employee):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+'Employees/add',employee);
  }
  delete(employee:EmployeeDelete):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Employees/delete",employee);
  }
  update(employee:Employee):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Employees/update",employee);
  }
  getEmployeeById(employeeId:number):Observable<SingleResponseModel<Employee>>{
    let newPath=this.apiUrl+"employees/getbyid?empolyeeId="+employeeId
    return this.httpClient.get<SingleResponseModel<Employee>>(newPath);
  }
}

