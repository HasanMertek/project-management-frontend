import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeImage } from '../models/employeeImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeImageService {
  apiUrl = 'https://localhost:44331/api/';
  constructor(private httpClient:HttpClient) { }
  getEmployeeImages():Observable<ListResponseModel<EmployeeImage>>{
    let newPath=this.apiUrl+'employeeImages/getall';
    return this.httpClient.get<ListResponseModel<EmployeeImage>>(newPath);

  }
  getEmployeeImagesByEmployeeId(employeeId:number):Observable<ListResponseModel<EmployeeImage>>{
    let newPath=this.apiUrl+'employeeImages/getimagesbyemployeeid?id='+employeeId;
    return this.httpClient.get<ListResponseModel<EmployeeImage>>(newPath);

  }
}
