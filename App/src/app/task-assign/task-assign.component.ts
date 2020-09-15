import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { PersonData } from 'src/models/persondata.model';
import { TaskData } from 'src/models/taskdata.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.css']
})

export class TaskAssignComponent implements OnInit {
  public members: PersonData[];
  public primary_person: PersonData;
  public secondary_person: PersonData;
  public task: TaskData;
  public taskAssignForm: FormGroup;
  public submitted = false;
  public taskData: TaskData;
  public priority: String;

  constructor(
    public homeService: HomeService,
    public router: Router,
    public formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.taskAssignForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.homeService.getMembers(localStorage.getItem('familyId')).subscribe((data) => {
      this.members = new Array();
      let i = 0;
      JSON.parse(JSON.stringify(data)).members.forEach(element => {
        if(element.id!=localStorage.getItem('userId'))
        {
          this.members.push({
            person_name: element.name,
            person_id: element.id,
            id: i
          });
          i++;
        }
      });
      console.log(this.members);
    })
  }
  public get f() {
    return this.taskAssignForm.controls;
  }



  onSubmit(e) {
    this.submitted = true;
    if (this.taskAssignForm.invalid)
      return;

    let index = (e.srcElement.pname.selectedIndex);
    this.primary_person = this.members[index];

    index = (e.srcElement.sname.selectedIndex);
    this.secondary_person = this.members[index];

    this.priority = e.srcElement.priority.value;

    console.log(this.primary_person);
    console.log(this.secondary_person);
    console.log(this.taskAssignForm.value);
    this.taskData = new TaskData(
      localStorage.getItem('userId'),
      this.f.name.value,
      this.f.description.value,
      this.primary_person,
      this.secondary_person,
      this.priority,
      new Date());

      
    this.homeService.onTaskAssign(this.taskData).subscribe((data) => {
      console.log(data);

    });
    alert('success');

  }

}
