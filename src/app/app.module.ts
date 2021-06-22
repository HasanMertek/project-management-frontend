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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NaviComponent,
    EmployeeComponent,
    DepartmentComponent,
    FilterPipeEmployeePipe,
    EmployeeAddComponent,
  ],
  imports: [BrowserModule,ToastrModule.forRoot({
    positionClass:'toast-bottom-right',
  }),BrowserAnimationsModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
