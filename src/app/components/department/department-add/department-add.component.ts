import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  departmentAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastr:ToastrService,private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.createDepartmentAddForm();
  }
createDepartmentAddForm(){
  this.departmentAddForm=this.formBuilder.group({
    name:['',Validators.required]
  })
}
add(){
  if(this.departmentAddForm.valid){
    let departmentModel=Object.assign({},this.departmentAddForm.value);
    this.departmentService.add(departmentModel).subscribe(response=>{
      this.toastr.success(response.message,'Success');
      window.location.reload();
    },
    responseError=>{
      for(let i=0;i<responseError.error.Errors.length;i++){
        this.toastr.error(responseError.error.Errors[i].ErrorMessage,'Validation Error')
      }
      
    }
    )   
  }
  else{
    this.toastr.error('Error',"Warning");
  }
}
}
