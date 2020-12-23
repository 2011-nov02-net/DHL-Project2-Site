import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from '../login/login.component';
import { CourseComponent } from '../course/course.component';
import { UserComponent } from 'src/user/user.component';

import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course', component: CourseComponent},
  { path: 'signup', component: UserComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
