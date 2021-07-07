import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Announcement } from 'src/app/models/announcement';
import { Department } from 'src/app/models/department';
import { Employee } from 'src/app/models/employee';
import { EmployeeDelete } from 'src/app/models/employeeDelete';
import { EmployeeDto } from 'src/app/models/employeeDto';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
      
   
  }

}
