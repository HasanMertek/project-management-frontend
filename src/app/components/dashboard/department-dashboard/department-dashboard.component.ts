import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-dashboard',
  templateUrl: './department-dashboard.component.html',
  styleUrls: ['./department-dashboard.component.css']
})
export class DepartmentDashboardComponent implements OnInit {
  departments:Department[]
  constructor(private departmentService:DepartmentService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getDepartments();
  }
  getDepartments(){
    this.departmentService.getAllDepartments().subscribe(response=>{
      this.departments=response.data
    })
  }
  deleteDepartment(department:Department){
    this.departmentService.delete(department).subscribe(response=>{
      this.toastr.success(response.message,"Success")
      window.location.reload();
    },
    responseError=>{
      this.toastr.error("Error");
    }
    )
  }
}
