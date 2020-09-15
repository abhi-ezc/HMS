import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-showfamily',
  templateUrl: './showfamily.component.html',
  styleUrls: ['./showfamily.component.css']
})
export class ShowfamilyComponent implements OnInit {

  constructor(public homeService:HomeService) { }

  ngOnInit() {  
    
  }

}
