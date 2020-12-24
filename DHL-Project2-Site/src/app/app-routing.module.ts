import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from '../login/login.component';
import { CourseComponent } from '../course/course.component';
import { UserComponent } from 'src/user/user.component';

// import { WelcomeComponent } from '../welcome/welcome.component';
import { UserUpdateComponent } from 'src/user-update/user-update.component';
import { AddenrollmentComponent } from 'src/addenrollment/addenrollment.component';
import { LandingPageComponent } from 'src/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course', component: CourseComponent},
  { path: 'signup', component: UserComponent },
  { path: 'user-update', component: UserUpdateComponent},
  { path: 'enroll', component: AddenrollmentComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
