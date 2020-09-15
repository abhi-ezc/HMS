import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-family',
  templateUrl: './admin-view-family.component.html',
  styleUrls: ['./admin-view-family.component.css']
})
export class AdminViewFamilyComponent implements OnInit {
  public family:any[]=null;
  constructor(
    public adminService:AdminService,
    public router:Router
    ) {
    adminService.getFamily().subscribe((data)=>{
      console.log(data);
      
      this.family=new Array(JSON.parse(JSON.stringify(data)).length);
      this.family=[...JSON.parse(JSON.stringify(data))]
      console.log(this.family);
      
    });
    
   }

  ngOnInit() {

  }

  viewFamily(id:String)
  {
    this.router.navigate(['/admin/family/view',{id:id}])
  }

}
