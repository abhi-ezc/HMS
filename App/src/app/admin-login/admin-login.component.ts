import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public uname:String;
  public password:String;
  constructor(
    public adminService:AdminService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  onAdminLogin()
  {
    let login={
      uname:this.uname,
      password:this.password
    };
    this.adminService.onLogin(login).subscribe((data)=>{
      if(JSON.parse(JSON.stringify(data)).msg==true)
      {
        localStorage.clear();
        localStorage.setItem('admin',"true")
        localStorage.setItem('userId',JSON.parse(JSON.stringify(data)).userId); 
        this.router.navigate(['/admin']);
      }
      else
      {
        alert('invalid login attempt');
      }
    })
  }

}
