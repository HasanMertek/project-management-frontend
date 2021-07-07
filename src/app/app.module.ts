import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NaviComponent } from './components/navi/navi.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { FilterPipeEmployeePipe } from './pipes/filter-pipe-employee.pipe';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskComponent } from './components/task/task.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update.component';
import { DepartmentAddComponent } from './components/department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './components/department/department-update/department-update.component';
import { AnnouncementAddComponent } from './components/announcement/announcement-add/announcement-add.component';
import { TaskAddComponent } from './components/task/task-add/task-add.component';
import { EmployeeDashboardComponent } from './components/dashboard/employee-dashboard/employee-dashboard.component';
import { DepartmentDashboardComponent } from './components/dashboard/department-dashboard/department-dashboard.component';
import { AnnouncementDashboardComponent } from './components/dashboard/announcement-dashboard/announcement-dashboard.component';
import { TaskDashboardComponent } from './components/dashboard/task-dashboard/task-dashboard.component';
import { AnnouncementUpdateComponent } from './components/announcement/announcement-update/announcement-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NaviComponent,
    EmployeeComponent,
    DepartmentComponent,
    FilterPipeEmployeePipe,
    EmployeeAddComponent,
    TaskManagerComponent,
    TaskComponent,
    AnnouncementComponent,
    EmployeeListComponent,
    DashboardComponent,
    EmployeeUpdateComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    AnnouncementAddComponent,
    TaskAddComponent,
    EmployeeDashboardComponent,
    DepartmentDashboardComponent,
    AnnouncementDashboardComponent,
    TaskDashboardComponent,
    AnnouncementUpdateComponent,
  ],
  imports: [BrowserModule,ToastrModule.forRoot({
    positionClass:'toast-bottom-right',
  }),BrowserAnimationsModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
