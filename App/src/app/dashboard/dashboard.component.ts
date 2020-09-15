import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from 'src/app/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[HeaderComponent]
})
export class DashboardComponent implements OnInit {

  constructor(
    public router:Router
  ) { 
  
  }

  ngOnInit() {
  }

}
