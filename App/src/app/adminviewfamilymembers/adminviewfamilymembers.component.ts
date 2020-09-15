import { Component, OnInit } from '@angular/core';
import { userdata } from 'src/models/userdata.model';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminviewfamilymembers',
  templateUrl: './adminviewfamilymembers.component.html',
  styleUrls: ['./adminviewfamilymembers.component.css']
})
export class AdminviewfamilymembersComponent implements OnInit {
  public members:userdata[];
  constructor(
    public adminService:AdminService,
    public router:Router,
    public routes:ActivatedRoute
  ) { 
    const id=routes.snapshot.params.id;
    adminService.getMembers(id).subscribe((data)=>{
      this.members=new Array(JSON.parse(JSON.stringify(data)).members.length);
      
      
      this.members=[...JSON.parse(JSON.stringify(data)).members];
      console.log(this.members);
      
      
    })
    
  }

  ngOnInit() {
  }

  onUserView(id:String)
  {
    console.log(id);
    
    this.router.navigate(['/admin/users/view',{id:id}]);
  }

}
