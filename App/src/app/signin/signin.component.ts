import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {logindata} from 'src/models/logindata.model';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {
  login=new logindata(null,null);
  constructor(public auth:AuthService) { }
  ngOnInit() {
  }
  onLogin()
  {
    this.auth.onLogin(this.login);
  }

}
