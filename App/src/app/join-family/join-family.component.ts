import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-family',
  templateUrl: './join-family.component.html',
  styleUrls: ['./join-family.component.css']
})
export class JoinFamilyComponent implements OnInit {

  public familyID:String="";
  constructor(
    public homeService:HomeService,
    public router:Router
    ) { }

  ngOnInit() {
  }
  onJoin()
  {
    this.homeService.onJoinFamily(this.familyID).subscribe((data)=>{
      
      alert(JSON.parse(JSON.stringify(data)).msg);
      this.router.navigate(['/joinfamily']);
    })
  }

}
