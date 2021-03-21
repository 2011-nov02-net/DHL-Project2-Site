import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';

import { LoginComponent } from './component/login/login.component';
import { CourseComponent } from './component/course/course.component';
import { UserComponent } from 'src/app/component/user/user.component';

// import { WelcomeComponent } from '../welcome/welcome.component';
import { UserUpdateComponent } from 'src/app/component/user-update/user-update.component';
import { AddenrollmentComponent } from 'src/app/component/addenrollment/addenrollment.component';
import { LandingPageComponent } from 'src/app/component/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'logout', component: OktaCallbackComponent},
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
