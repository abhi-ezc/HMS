import { Component, OnInit } from '@angular/core';
import { NotificationModel } from 'src/models/notification.model';
import { HomeService } from '../home.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public count:number;
  constructor(public homeService:HomeService) { }
  public notificationArray:NotificationModel[];
    
    
  ngOnInit() {
    
    
    this.homeService.getNotifications(localStorage.getItem('userId').toString()).subscribe((data)=>{
      let i=0;
      if(data==null)
      {
        this.count=0;
      }
      this.notificationArray=new Array(JSON.parse(JSON.stringify(data)))[0];
      console.log(this.notificationArray); 
      this.count=this.notificationArray.length;
    })    
  }

}
