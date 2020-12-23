import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CourseComponent } from '../course/course.component';
import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AddenrollmentComponent } from '../addenrollment/addenrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CourseComponent,
    WelcomeComponent,
    AddenrollmentComponent,
  ],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	MatSliderModule,
	LayoutModule,
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	AppRoutingModule,
	MatCardModule,
	ReactiveFormsModule,
	HttpClientModule,
	MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
