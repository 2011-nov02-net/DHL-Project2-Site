import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../service/login.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  user: User;

  constructor(
    private router: Router,
    private data: LoginService
  ) { }

  ngOnInit(): void {
    this.data.currentUser.subscribe(user => this.user = user)
  }

  logout(): void {
    this.data.setUser(null);
    sessionStorage.removeItem('currentEmail');
    this.router.navigate(['/']);
  }

}
