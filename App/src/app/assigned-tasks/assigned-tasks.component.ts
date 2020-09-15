import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assigned-tasks',
  templateUrl: './assigned-tasks.component.html',
  styleUrls: ['./assigned-tasks.component.css']
})
export class AssignedTasksComponent implements OnInit {
  public tasks:any[];
  constructor(
    public homeService:HomeService,
    public router:Router
  ) {
    homeService.getAssignedTasks(localStorage.getItem('userId')).subscribe((data)=>{
      this.tasks=[...JSON.parse(JSON.stringify(data))];
    })
   }

  ngOnInit() {
  }

  onView(id)
  {
    this.router.navigate(['/tasks/view',{id}])
  }

  onComplete(id)
  { 
    this.homeService.completeTask(id).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      window.location.reload();
    })
  }
}
