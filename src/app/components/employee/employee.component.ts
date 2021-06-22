import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeDto } from 'src/app/models/employeeDto';
import { ActivatedRoute } from '@angular/router';
import { EmployeeImageService } from 'src/app/services/employee-image.service';
import { EmployeeImage } from 'src/app/models/employeeImage';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: EmployeeDto[] = [];
  filterText = '';
  employeeImages:EmployeeImage[];
  constructor(private employeeService: EmployeeService,private employeeImageService:EmployeeImageService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
       if (params['departmentId']) {
         this.getEmployeesByDepartment(params['departmentId'])
       }
       else{
         this.getAllEmployee();
       }
     })
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((response) => {
      this.employees = response.data;
      this.setCoverImage(this.employees);
    });
  }
  getEmployeesByDepartment(departmentId:number){
    this.employeeService.getEmployeesByDepartment(departmentId).subscribe(response=>{
      this.employees=response.data;
      this.setCoverImage(this.employees);
    })
  }
  getEmployeeImage(){
    this.employeeImageService.getEmployeeImages().subscribe((response)=>{
      this.employeeImages=response.data;
    });
  }
  setCoverImage(employeeList:EmployeeDto[]){
    employeeList.forEach(item=>{
      this.employeeImageService.getEmployeeImagesByEmployeeId(item.id).subscribe(response=>{
        item.imagePath='https://localhost:44331/'+response.data[0].imagePath;
      });
    })
  }
}
