import { EmployeeComponent } from './components/employee/employee.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update.component';
import { DepartmentAddComponent } from './components/department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './components/department/department-update/department-update.component';
import { AnnouncementAddComponent } from './components/announcement/announcement-add/announcement-add.component';
import { TaskAddComponent } from './components/task/task-add/task-add.component';
import { EmployeeDashboardComponent } from './components/dashboard/employee-dashboard/employee-dashboard.component';
import { DepartmentDashboardComponent } from './components/dashboard/department-dashboard/department-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnnouncementDashboardComponent } from './components/dashboard/announcement-dashboard/announcement-dashboard.component';
import { TaskDashboardComponent } from './components/dashboard/task-dashboard/task-dashboard.component';
import { AnnouncementUpdateComponent } from './components/announcement/announcement-update/announcement-update.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path:'manager',
    component:TaskManagerComponent
  },
  {
    path:'employees',
    component:EmployeeComponent
  },
  {
    path:'employees/department/:departmentId',
    component:EmployeeComponent
  },
  {
    path:'employees/add',
    component:EmployeeAddComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'dashboard/employees',
    component:EmployeeDashboardComponent
  },
  {
    path:'employees/update/:id',
    component:EmployeeUpdateComponent
  },
  {
    path:'departments/add',
    component:DepartmentAddComponent
  },
  {
    path:'departments/update/:id',
    component:DepartmentUpdateComponent
  },
  {
    path:'announcements/add',
    component:AnnouncementAddComponent
  },
  {
    path:'tasks/add',
    component:TaskAddComponent
  },
  {
    path:'dashboard/departments',
    component:DepartmentDashboardComponent
  },
  {
    path:'dashboard/announcements',
    component:AnnouncementDashboardComponent
  },
  {
    path:'dashboard/tasks',
    component:TaskDashboardComponent
  },
  {
    path:'announcements/update/:id',
    component:AnnouncementUpdateComponent
  }
 
 

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
