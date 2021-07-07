import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {
  departmentUpdateForm:FormGroup
  department:Department
  constructor(private formBuilder: FormBuilder, private departmentService:DepartmentService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params=>{
      if(params['id']){
        this.getDepartment(params['id'])
        this.createDepartmentUpdateForm();
      }
    })
  }
createDepartmentUpdateForm(){
  this.departmentUpdateForm=this.formBuilder.group({
    name:['',Validators.required]
  })
}
getDepartment(departmentId:number){
  this.departmentService.getDepartment(departmentId).subscribe(response=>{
    this.department=response.data
  })
}

update(){
  if(this.departmentUpdateForm.valid){
    let departmentModel=Object.assign({},this.departmentUpdateForm.value)
    departmentModel.id=this.department.id
    this.departmentService.update(departmentModel).subscribe(response=>{
      this.toastr.success(response.message,"Success")
      window.location.reload();
    },
    responseError=>{
      if (responseError.error.Errors.length > 0) {
        console.log(responseError.error.Errors);
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastr.error(
            responseError.error.Errors[i].ErrorMessage,
            'Validation Error'
          );
        }
      }
    }
  );
} else {
  this.toastr.error('Error', 'Warning');
}
}
}
