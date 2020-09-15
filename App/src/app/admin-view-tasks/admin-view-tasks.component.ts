import { Component, OnInit } from '@angular/core';
import { TaskData } from 'src/models/taskdata.model';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-tasks',
  templateUrl: './admin-view-tasks.component.html',
  styleUrls: ['./admin-view-tasks.component.css']
})
export class AdminViewTasksComponent implements OnInit {
  public tasks:TaskData[];
  constructor(
    public adminService:AdminService,
    public router:Router
  ) {
      adminService.getTasksList().subscribe((data)=>{
        this.tasks=[...JSON.parse(JSON.stringify(data))];
      })
   }

  ngOnInit() {
  }

  onTaskView(task)
  {
   this.router.navigate(['/admin/tasks/view',{task:JSON.stringify(task)}]) 
  }

}
