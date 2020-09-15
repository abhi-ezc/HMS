import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { RequestData } from 'src/models/requestdata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  public reqData:RequestData[]=null;
  constructor(
    public homeService: HomeService,
    public router:Router
  ) { }

  ngOnInit() {
    this.homeService.getRequests(localStorage.getItem('userId')).subscribe((data) => {
      if(JSON.parse(JSON.stringify(data)).requests)
      this.reqData=new Array(JSON.parse(JSON.stringify(data)).requests[0]);
      
      
    })
  }

  onRequestView(id:String)
  {
    this.router.navigate(['/request',{id}]);
  }

}
