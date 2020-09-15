import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { userdata } from 'src/models/userdata.model';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit {
  public users:userdata[];
  constructor(
    public adminService:AdminService,
    public router:Router
  ) { 
    adminService.getUsers().subscribe((data)=>{
      console.log(data);
      this.users=[...JSON.parse(JSON.stringify(data))];
    })
  }

  ngOnInit() {
  }

  onUserView(id)
  {
    this.router.navigate(['/admin/users/view',{id}]);
  }
}
