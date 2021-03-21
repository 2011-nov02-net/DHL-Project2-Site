import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

import { LoginService } from '../../service/login.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private router: Router,
    private oktaAuth: AuthService
  ) { }

  ngOnInit(): void {
    this.oktaAuth.subscribeAuthStateChange((authState: boolean) => {
      this.isAuthenticated = authState;
    });
  }

  login(): void {
    this.oktaAuth.login();
  }

  logout(): void {
    this.oktaAuth.logout();
  }

}
