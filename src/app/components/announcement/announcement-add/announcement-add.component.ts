import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcement-add',
  templateUrl: './announcement-add.component.html',
  styleUrls: ['./announcement-add.component.css']
})
export class AnnouncementAddComponent implements OnInit {
  announcementAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private toastr:ToastrService,private announcementService:AnnouncementService) { }

  ngOnInit(): void {
    this.createAnnouncementAddForm();
  }

createAnnouncementAddForm(){
  this.announcementAddForm=this.formBuilder.group({
    description:['',Validators.required],
    title:['',Validators.required],
    notice:['',Validators.required]
  })
}
add(){
  if(this.announcementAddForm.valid){
    let announcementModel=Object.assign({},this.announcementAddForm.value);
    this.announcementService.add(announcementModel).subscribe(response=>{
      window.location.reload();
      this.toastr.success(response.message,"Success")
      
    })
  }
}
}
