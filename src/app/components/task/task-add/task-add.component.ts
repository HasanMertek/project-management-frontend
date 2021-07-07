import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  taskAddForm:FormGroup
  employees:Employee[]
  constructor(private formBuilder:FormBuilder,private employeeService:EmployeeService,private taskService:TaskService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.createTaskAddForm();
  }
getEmployees(){
  this.employeeService.getEmployees().subscribe(response=>{
    this.employees=response.data
  })
}
createTaskAddForm(){
  this.taskAddForm=this.formBuilder.group({
    employeeId:['', Validators.required],
    description:['', Validators.required],
    endDate:['',Validators.required]
    
    

  })
}
add(){
  if(this.taskAddForm.valid){
    let taskModel=Object.assign({},this.taskAddForm.value);
    taskModel.employeeId=Number(taskModel.employeeId);
    this.taskService.add(taskModel).subscribe(response=>{
      this.toastr.success(response.message,"Success")
      window.location.reload();

    })
  }
}
}
