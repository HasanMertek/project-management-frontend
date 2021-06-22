import { EmployeeComponent } from './components/employee/employee.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
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
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
