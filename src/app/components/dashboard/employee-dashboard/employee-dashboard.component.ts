import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/models/employee';
import { EmployeeDelete } from 'src/app/models/employeeDelete';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employees:Employee[]
  
  constructor(private employeeService:EmployeeService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getEmployees();

  }
  deleteEmployee(employee:Employee){
    let employeeModel:EmployeeDelete={
      id:employee.id,
      departmentId:employee.departmentId,
      firstName:employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      salary: employee.salary,
      isActive: employee.isActive,
    };
    this.employeeService.delete(employeeModel).subscribe(response=>{
      this.toastr.success(response.message,"Success")
      window.location.reload();
    },
    responseError=>{
      this.toastr.error("Error");
    }
    )
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe(response=>{
      this.employees=response.data
    })
  
  }
}
