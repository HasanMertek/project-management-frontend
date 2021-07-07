import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcement-update',
  templateUrl: './announcement-update.component.html',
  styleUrls: ['./announcement-update.component.css']
})
export class AnnouncementUpdateComponent implements OnInit {
  announcementUpdateForm:FormGroup
  announcement:Announcement
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private activatedRoute: ActivatedRoute,private announcementService:AnnouncementService) { }

  ngOnInit(): void {
    this.createAnnouncementUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getAnnouncement(params["id"])
      }
    })
  }
  getAnnouncement(announcementid:number){
    this.announcementService.getAnnouncement(announcementid).subscribe(response=>{
      this.announcement=response.data
    })
  }
  createAnnouncementUpdateForm(){
    this.announcementUpdateForm=this.formBuilder.group({
      description:["",Validators.required],
      title:["",Validators.required],
      notice:["",Validators.required]
      

    })
  }
  update(){
    if(this.announcementUpdateForm.valid){
      let announcementModel=Object.assign({},this.announcementUpdateForm.value)
      announcementModel.id=this.announcement.id
      this.announcementService.update(announcementModel).subscribe(response=>{
        this.toastr.success(response.message,"Success")
        window.location.reload();
      })
    }
  }
}
