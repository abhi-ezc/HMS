import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateFamilyComponent } from './create-family/create-family.component';
import { JoinFamilyComponent } from './join-family/join-family.component';
import { ShowfamilyComponent } from './showfamily/showfamily.component';
import { NotificationComponent } from './notification/notification.component';
import { RequestsComponent } from './requests/requests.component';
import { TaskAssignComponent } from './task-assign/task-assign.component';
import { AuthComponent } from './auth/auth.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminViewFamilyComponent } from './admin-view-family/admin-view-family.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { AdminViewTasksComponent } from './admin-view-tasks/admin-view-tasks.component';
import { AdminviewfamilymembersComponent } from './adminviewfamilymembers/adminviewfamilymembers.component';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminViewTaskComponent } from './admin-view-task/admin-view-task.component';
import { YourTasksComponent } from './your-tasks/your-tasks.component';
import { AssignedTasksComponent } from './assigned-tasks/assigned-tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    LogoutComponent,
    RefreshComponent,
    AboutComponent,
    ContactComponent,
    CreateFamilyComponent,
    JoinFamilyComponent,
    ShowfamilyComponent,
    NotificationComponent,
    RequestsComponent,
    TaskAssignComponent,
    AuthComponent,
    ViewRequestComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminViewFamilyComponent,
    AdminViewUsersComponent,
    AdminViewTasksComponent,
    AdminviewfamilymembersComponent,
    AdminViewUserComponent,
    AdminAuthComponent,
    AdminViewTaskComponent,
    YourTasksComponent,
    AssignedTasksComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
