import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department';
import { Employee } from 'src/app/models/employee';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  departments:Department[]=[]
  employeeAddForm:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder,private departmentService:DepartmentService,private employeeService:EmployeeService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createEmployeeAddForm();
    this.getDepartments();
  }
  getDepartments(){
    this.departmentService.getAllDepartments().subscribe(response=>{
      this.departments=response.data;
    })


  }
 createEmployeeAddForm(){
   this.employeeAddForm=this.formBuilder.group({
     departmentId:["",Validators.required],
     firstName:["",Validators.required],
     lastName:["",Validators.required],
     email:["",Validators.required],
      salary:["",Validators.required],

   })
 }
  add()
    {
     if (this.employeeAddForm.valid) {
       let employeeModel=Object.assign({},this.employeeAddForm.value);
       employeeModel.departmentId=Number(employeeModel.departmentId);
       employeeModel.salary=Number(employeeModel.salary.toString());
       this.employeeService.add(employeeModel).subscribe(response=>{
         this.toastr.success(response.message,'success')
         window.location.reload();
         
       })
      
     }
    
}
}
