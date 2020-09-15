import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateFamilyComponent } from './create-family/create-family.component';
import { JoinFamilyComponent } from './join-family/join-family.component';
import { ShowfamilyComponent } from './showfamily/showfamily.component';
import { RequestsComponent } from './requests/requests.component';
import { TaskAssignComponent } from './task-assign/task-assign.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminViewFamilyComponent } from './admin-view-family/admin-view-family.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { AdminViewTasksComponent } from './admin-view-tasks/admin-view-tasks.component';
import { AdminviewfamilymembersComponent } from './adminviewfamilymembers/adminviewfamilymembers.component';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';
import { AdminViewTaskComponent } from './admin-view-task/admin-view-task.component';
import { YourTasksComponent } from './your-tasks/your-tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AssignedTasksComponent } from './assigned-tasks/assigned-tasks.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"signin",component:SigninComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"dashboard",component:DashboardComponent,
  },
  {
    path:"logout",component:LogoutComponent
  },
  {
    path:'refresh',component:RefreshComponent
  },
  {
    path:"createfamily",component:CreateFamilyComponent
  },
  {
    path:"joinfamily", component:JoinFamilyComponent
  },
  {
    path:"showfamily", component:ShowfamilyComponent
  },
  {
    path:"your-requests",component:RequestsComponent
  },
  {
    path:"task-assign",component:TaskAssignComponent
  },
  {
    path:"request",component:ViewRequestComponent
  },
  {
    path:"tasks",component:YourTasksComponent
  },
  {
    path:"assignedtasks",component:AssignedTasksComponent
  },
  {
    path:"tasks/view",component:ViewTaskComponent
  },
  {
    path:'admin/login',component:AdminLoginComponent
  },
  {
    path:'admin',component:AdminDashboardComponent
  },
  {
    path:"admin/family",component:AdminViewFamilyComponent
  },
  {
    path:"admin/users" , component:AdminViewUsersComponent
  },
  {
    path:"admin/tasks",component:AdminViewTasksComponent
  },
  {
    path:"admin/family/view",component:AdminviewfamilymembersComponent
  },
  {
    path:"admin/users/view", component:AdminViewUserComponent
  },
  {
    path:"admin/users/update",component:SignupComponent
  },
  {
    path:"admin/tasks/view",component:AdminViewTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
