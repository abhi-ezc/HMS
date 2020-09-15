import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    public http:HttpClient,
    public homeService:HomeService
  ) { }

  onLogin(login)
  {
    return this.http.get('http://localhost:3000/admin/login/'+JSON.stringify(login));
  }
  getFamily()
  {
    return this.http.get('http://localhost:3000/admin/family');
  }

  getMembers(id)
  {
    return this.homeService.getMembers(id);
  }

  getUser(id)
  {
    return this.http.get('http://localhost:3000/admin/getuser/'+id);
  }

  onUpdateUser(id,data)
  {
    console.log(data);
    
    return this.http.post('http://localhost:3000/admin/updateuser/'+id,{data});
  }

  onDeleteUser(id)
  {
    return this.http.get('http://localhost:3000/admin/deleteuser/'+id);
  }

  getUsers()
  {
    return this.http.get('http://localhost:3000/admin/getusers');
  }

  getTasksList()
  {
    return this.http.get('http://localhost:3000/admin/gettasks');
  }
}
