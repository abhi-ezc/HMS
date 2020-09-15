import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  constructor(
    public router:Router
  ) {
    if(!localStorage.getItem('admin'))
    {
      localStorage.clear();
      router.navigate(['/admin/login']);
    }
   }

  ngOnInit() {
  }

}
