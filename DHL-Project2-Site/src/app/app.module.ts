import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }           from './app.component';
import { NavbarComponent }        from './component/navbar/navbar.component';
import { CourseComponent }        from './component/course/course.component';
import { LoginComponent }         from './component/login/login.component';
import { UserComponent }          from './component/user/user.component';
import { WelcomeComponent }       from './component/welcome/welcome.component';
import { UserUpdateComponent }    from './component/user-update/user-update.component';
import { AddenrollmentComponent } from './component/addenrollment/addenrollment.component';
import { LandingPageComponent }   from './component/landing-page/landing-page.component';

import { UserService } from './service/user.service';
import { CourseService } from './service/course.service';
import { LoginService } from './service/login.service';

const config = {
  issuer: 'https://dev-2875280.okta.com/oauth2/default',
  pkce: true,
  clientId: '0oa442ei06UcFel8c5d6',
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid'],
  postLogoutRedirectUri: window.location.origin
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CourseComponent,
    UserComponent,
    WelcomeComponent,
    UserUpdateComponent,
    AddenrollmentComponent,
    LandingPageComponent,
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
    MatTableModule,
    OktaAuthModule,
  ],
  providers: [
    UserService,
    CourseService,
    LoginService,
    { provide: OKTA_CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
