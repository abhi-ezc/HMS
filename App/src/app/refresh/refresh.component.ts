import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { headersToString } from 'selenium-webdriver/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {

  constructor(
    public router:Router,
    public routes:ActivatedRoute
  ) {
    if(localStorage.getItem('reload')=='true')
    {
      localStorage.setItem('reload','false');
      window.location.reload();
    }
    else
    {
      router.navigate(['/dashboard']);
    }

   }
  public header:HeaderComponent

  ngOnInit() {
  }

}
