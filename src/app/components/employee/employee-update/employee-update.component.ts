import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department';
import { Employee } from 'src/app/models/employee';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employeeUpdateForm: FormGroup
  employee: Employee
  departments: Department[]
  constructor(private formBuilder: FormBuilder, private departmentService: DepartmentService, private employeeService: EmployeeService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.createEmployeeUpdateForm();
    this.getDepartments();
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getEmployeeById(params["id"])
       
      }
    })
  }
  getEmployeeById(employeeId:number){
    this.employeeService.getEmployeeById(employeeId).subscribe(response=>{
      this.employee=response.data
    })
  }
  createEmployeeUpdateForm() {
    this.employeeUpdateForm = this.formBuilder.group({
      departmentId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      salary: ['', Validators.required],

    })

  }
 update(){
   if(this.employeeUpdateForm.valid){
     let employeeModel=Object.assign({},this.employeeUpdateForm.value);
     employeeModel.id=this.employee.id;    
     employeeModel.departmentId=Number(employeeModel.departmentId);
     employeeModel.salary=Number(employeeModel.salary.toString());
    this.employeeService.update(employeeModel).subscribe(response=>{
      this.toastr.success(response.message,"Success")
      window.location.reload();
     

    })
   }
 }
  getDepartments(){
    this.departmentService.getAllDepartments().subscribe(response=>{
      this.departments=response.data;
    })
  }
}
