import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  announcements:Announcement[]
  constructor(private announcementService:AnnouncementService) { }

  ngOnInit(): void {
    this.getAnnouncements();
  }
 getAnnouncements(){
   this.announcementService.getAnnouncements().subscribe(response=>{
     this.announcements=response.data
   })
 }

}
