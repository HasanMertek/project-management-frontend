import { Component, OnInit } from '@angular/core';
import { EmployeeDto } from 'src/app/models/employeeDto';
import { EmployeeImage } from 'src/app/models/employeeImage';
import { EmployeeImageService } from 'src/app/services/employee-image.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:EmployeeDto[]
  employeeImages:EmployeeImage[]
  filterText="";


  constructor(private employeeService:EmployeeService,private employeeImageService:EmployeeImageService)  {
    this.getAllEmployee()
   }
  
  ngOnInit(): void {
  }
  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((response) => {
      this.employees = response.data;
      this.setCoverImage(this.employees);
    });
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
