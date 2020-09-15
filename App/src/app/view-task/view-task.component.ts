import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { TaskData } from 'src/models/taskdata.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  public task:any;
  constructor(
    public routes:ActivatedRoute,
    public homeService:HomeService
  ) {
    if(routes.snapshot.params)
    {
      const id=routes.snapshot.params.id;
      homeService.getTask(id).subscribe((data)=>{
        console.log(JSON.parse(JSON.stringify(data)).data);
        this.task=JSON.parse(JSON.stringify(data)).data;
        if(this.task.who!=undefined)
        {
          this.homeService.getUserName(id).subscribe((user)=>{
            this.task.who=JSON.parse(JSON.stringify(user));
          })
        }
      })
    }
   }

  ngOnInit() {
  }

}
