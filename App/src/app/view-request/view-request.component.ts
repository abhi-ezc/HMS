import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  public user={
    name:"",
    address:"",
    gender:"",
    age:""
  };
  constructor(
    public route:ActivatedRoute,
    public homeService:HomeService,
    public router:Router
    ) { }

  ngOnInit() {
    
    this.homeService.getRequestView(this.route.snapshot.params.id).subscribe((data)=>{
      this.user=JSON.parse(JSON.stringify(data)).user;
      console.log(this.user);
      
      
    });
  }

  onAccept(id:String)
  {
    this.homeService.onAccept(id).subscribe((data)=>{
      console.log(data);
      // localStorage.setItem('familyId',JSON.parse(JSON.stringify(id)));
      this.router.navigate(['/your-requests']);
    })
    
  }

  onReject(id:String)
  {
    this.homeService.onReject(id).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      this.router.navigate(['/your-requests']);
    })
  }
}
