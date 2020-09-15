import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {

  public familyId: String;
  constructor(public homeService: HomeService, public router: Router) { }

  ngOnInit() {

    let timeout = 2000;
    if (localStorage.getItem('familyId') == "undefined") {
      this.homeService.onCreateFamily(localStorage.getItem('userId')).subscribe((data) => {
        console.log(data);
        this.familyId = JSON.parse(JSON.stringify(data)).id;
        setTimeout(() => {
          localStorage.setItem('familyId', this.familyId.toString());
          localStorage.setItem('head', "true");
        }, 1000);

        setTimeout(() => {
          localStorage.setItem('reload', 'true');
          this.router.navigate(['/refresh']).then(() => {
            this.router.navigateByUrl('/dashboard');
          });
        }, 2000);
      })
    }
    else {

      this.router.navigate(['/dashboard'])
    }

  }

}
