import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { userdata } from 'src/models/userdata.model';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public regForm: FormGroup;
  submitted = false;
  user = new userdata(null, null, null, null, null, null, null);
  public flagUpdate: boolean = false;
  public title:string;
  public btn_name:string;
  constructor(
    public formBuilder: FormBuilder,
    public homeService: HomeService,
    public routes: ActivatedRoute,
    public adminService: AdminService,
    public router:Router
  ) {
    if (routes.snapshot.params.id) {
      this.flagUpdate = true;
      let id = routes.snapshot.params.id;
      
      adminService.getUser(id).subscribe((data) => {
        this.user = JSON.parse(JSON.stringify(data));
        console.log(this.user);
        this.regForm.setValue({'name':this.user.name,
        'age':this.user.age,
        'address':this.user.address,
        'gender':this.user.gender,
        'email':this.user.email,
        'mobile':this.user.mobile,
        'password':this.user.password,
        'confirmPassword':this.user.password
      });
      this.title="Update User";
      this.btn_name="Update";
      })

    }
    else {
      this.flagUpdate = false;
      this.btn_name="Add";
      this.title="Registration Form";
    }
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.maxLength(2)]],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: []
    });

  }

  get f() {
    return this.regForm.controls;
  }

  onSubmit()
  {
    if(this.flagUpdate==false)
    {
      this.onReg();
    }
    else
    {
      this.onUpdate()
    }
  }

  onReg() {
    this.submitted = true;

    if (this.f.password.value != this.f.confirmPassword.value) {
      this.f.confirmPassword.setErrors({
        match: false
      });
      console.log(this.f.confirmPassword.errors);
    }
    if (this.regForm.invalid) {
      return;
    }
    this.user = this.regForm.value;
    this.homeService.onAdd(this.user).subscribe((data) => {
      alert(JSON.parse(JSON.stringify(data)).msg)

    })

  }

  onUpdate()
  {
    let id=this.routes.snapshot.params.id;
    this.user= this.regForm.value;
    console.log(this.user);
    
    this.adminService.onUpdateUser(id,this.user).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
        this.router.navigate(['/admin/users']);
    })
  }
}