import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public flag: boolean;
  public flagFamily: boolean;
  public flagHead: boolean;
  public flagAdmin: boolean = false;
  public familyId:string;
  constructor(public router: Router) {
    console.log("family Id : " + localStorage.getItem('familyId'));

    if (localStorage.getItem('userId')) {

      this.flag = true;
    }
    else {
      this.flag = false;

    }

    if (localStorage.getItem('familyId') != "undefined") {

      this.flagFamily = true;
      if (localStorage.getItem('head') == "true") {
        this.flagHead = true;
        this.familyId=localStorage.getItem('familyId');
      }
      else {
        this.flagHead = false;
      }
    }
    else {
      this.flagFamily = false;
    }

    if (localStorage.getItem('admin')) {
      this.flagAdmin = true
      
    }
    else {
      this.flagAdmin = false;
    }


  }


  ngOnInit() {
    //console.log("id:" + localStorage.getItem('userId'));
  }

}
