import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../models/announcement';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  apiUrl = 'https://localhost:44331/api/';
  constructor(private httpClient:HttpClient) { }
  getAnnouncements():Observable<ListResponseModel<Announcement>>{
    let newPath=this.apiUrl+'announcements/getall'
    return this.httpClient.get<ListResponseModel<Announcement>>(newPath)
  }
  add(announcement:Announcement):Observable<ResponseModel>{
    let newPath=this.apiUrl+"announcements/add";
    return this.httpClient.post<ResponseModel>(newPath,announcement)
  }
  delete(announcement:Announcement):Observable<ResponseModel>{
    let newPath=this.apiUrl+"announcements/delete";
    return this.httpClient.post<ResponseModel>(newPath,announcement)
  }
  update(announcement:Announcement):Observable<ResponseModel>{
    let newPath=this.apiUrl+"announcements/update";
    return this.httpClient.post<ResponseModel>(newPath,announcement)
  }
  getAnnouncement(announcement:number):Observable<SingleResponseModel<Announcement>>{
    let newPath=this.apiUrl+"announcements/getbyid?announcementid="+announcement
    return this.httpClient.get<SingleResponseModel<Announcement>>(newPath)
  }
}
