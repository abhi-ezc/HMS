import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userdata } from 'src/models/userdata.model';
import { logindata } from 'src/models/logindata.model';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskData } from 'src/models/taskdata.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient,
    public router: Router) { }

  onAdd(user: userdata) {
    return this.http.post('http://localhost:3000/sign/adduser', { "user": user });
  }

  onCreateFamily(id: String) {
    return this.http.get('http://localhost:3000/family/createFamily/' + id);
  }

  onJoinFamily(id: String) {
    return this.http.post('http://localhost:3000/family/joinFamily/' + id, { from: localStorage.getItem('userId') });
  }

  getNotifications(id: String) {
    return this.http.get('http://localhost:3000/user/notification/' + id);
  }

  getMembers(id: String) {
    return this.http.get('http://localhost:3000/family/members/' + id);
  }

  getRequests(id: String) {
    return this.http.get('http://localhost:3000/user/requests/' + id);
  }

  getRequestView(id: String) {
    return this.http.get('http://localhost:3000/user/requestview/' + id);
  }

  onAccept(id: String) {
    return this.http.post('http://localhost:3000/user/acceptrequest/' + id, { id: localStorage.getItem('userId') });
  }

  onReject(id: String) {

    return this.http.post('http://localhost:3000/user/rejectrequest/' + id, { id: localStorage.getItem('userId') });
  }

  onTaskAssign(task: TaskData) {
   // console.log(JSON.parse(JSON.stringify(task)));
    
    return this.http.post('http://localhost:3000/task/assign', JSON.parse(JSON.stringify(task))); 
  }
  
  getYourTasks(id)
  {
    return this.http.get('http://localhost:3000/task/getyourtasks/'+id);
  }

  getAssignedTasks(id)
  {
    return this.http.get('http://localhost:3000/task/assigned/'+id);
  }

  completeTask(id)
  {
    return this.http.post('http://localhost:3000/task/complete',{id});
  }

  getTask(id)
  {
    return this.http.get('http://localhost:3000/task/get/'+id);
  }

  deleteTask(id)
  { 
    return this.http.post('http://localhost:3000/task/delete',{id:id});
  }

  getUserName(id)
  {
    return this.http.get('http://localhost:3000/user/get/'+id);
  }
}
