import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcement-dashboard',
  templateUrl: './announcement-dashboard.component.html',
  styleUrls: ['./announcement-dashboard.component.css']
})
export class AnnouncementDashboardComponent implements OnInit {
  announcements:Announcement[]
  constructor(private announcementService:AnnouncementService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAnnouncement();
  }
  getAnnouncement(){
    this.announcementService.getAnnouncements().subscribe(response=>{
      this.announcements=response.data
    })
  }
  deleteAnnouncement(announcement:Announcement){
    this.announcementService.delete(announcement).subscribe(response=>{
      this.toastr.success(response.message,"Success")
      window.location.reload();
    })
  }
}
