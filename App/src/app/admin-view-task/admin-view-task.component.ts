import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { TaskData } from 'src/models/taskdata.model';

@Component({
  selector: 'app-admin-view-task',
  templateUrl: './admin-view-task.component.html',
  styleUrls: ['./admin-view-task.component.css']
})
export class AdminViewTaskComponent implements OnInit {
  public task: TaskData;
  constructor(
    public routes: ActivatedRoute,
    public adminService: AdminService
  ) {
    this.task=JSON.parse(JSON.stringify(routes.snapshot.params.task))
    
  }

  ngOnInit() {
  }

}
