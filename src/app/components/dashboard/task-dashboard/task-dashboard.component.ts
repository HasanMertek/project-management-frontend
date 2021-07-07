import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  tasks:Task[]
  constructor(private taskService:TaskService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.taskService.getAllTasks().subscribe(response=>{
      this.tasks=response.data
    })
  
  }
  deleteTask(task:Task){
    let taskModel:Task={
      id:task.id,
      employeeId:task.employeeId,
      description:task.description,
      endDate: task.endDate,
    };
    this.taskService.delete(taskModel).subscribe(response=>{
      this.toastr.success(response.message,"Success")
      window.location.reload();
    },
    responseError=>{
      this.toastr.error("Error");
    }
    )
  }
}
