import { Component, OnInit } from '@angular/core';
import { TaskData } from 'src/models/taskdata.model';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-tasks',
  templateUrl: './your-tasks.component.html',
  styleUrls: ['./your-tasks.component.css']
})
export class YourTasksComponent implements OnInit {
  public tasks:TaskData[];
  constructor(
    public homeService:HomeService,
    public router:Router
  ) {
      homeService.getYourTasks(localStorage.getItem('userId')).subscribe((data)=>{
        this.tasks=[...JSON.parse(JSON.stringify(data))];
      })
   }

  ngOnInit() {
  }

  onView(id)
  {
    this.router.navigate(['/tasks/view',{id}])
  }

  onDelete(id)
  { 
    this.homeService.deleteTask(id).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      window.location.reload();
    })
  }

}
