import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { userdata } from 'src/models/userdata.model';

@Component({
  selector: 'app-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.css']
})
export class AdminViewUserComponent implements OnInit {
  public user:userdata=null;
  constructor(
    public router:Router,
    public adminService:AdminService,
    public routes:ActivatedRoute
  ) { 
    adminService.getUser(routes.snapshot.params.id).subscribe((data)=>{
      this.user=JSON.parse(JSON.stringify(data));
      console.log(this.user);
      
    })
    
  }

  ngOnInit() {
  }

  onUpdate(id)
  {
    this.router.navigate(['/admin/users/update',{id:id}]);
  }

  onDelete(id)
  {
    this.adminService.onDeleteUser(id).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      this.router.navigate(['/admin/users/view']);
    })
  }

}
