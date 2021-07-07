import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDetailDto } from 'src/app/models/taskDetailDto';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:TaskDetailDto[]
  constructor(private taskService:TaskService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.taskService.getTasks().subscribe(response=>{
      this.tasks=response.data
    })
  }

}
