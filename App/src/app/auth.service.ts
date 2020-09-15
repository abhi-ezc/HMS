import { Injectable } from '@angular/core';
import { logindata } from 'src/models/logindata.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  onLogin(login: logindata) {
    console.log(login);

    this.http.post('http://localhost:3000/sign/login', { login }).subscribe((data) => {
      if (data == null) {
        alert('User Not Found');
        return;
      }

      localStorage.setItem('is-logged', 'true');
      localStorage.setItem('userId', JSON.parse(JSON.stringify(data))._id)
      console.log(JSON.parse(JSON.stringify(data)).family);
      if (JSON.parse(JSON.stringify(data)).family) {
        localStorage.setItem('familyId', JSON.parse(JSON.stringify(data)).family.id)
        if (JSON.parse(JSON.stringify(data)).family.head == true) {
          localStorage.setItem('head', 'true');
        }
        else{
          localStorage.setItem('head', 'false');
        }
      }
      else {
        localStorage.setItem('familyId', "undefined");
        localStorage.setItem('head', 'false');

      }
      this.router.navigateByUrl('/refresh', { skipLocationChange: false }).then(() => {
        this.router.navigate(['/dashboard']);
      });
    })
  }
}
