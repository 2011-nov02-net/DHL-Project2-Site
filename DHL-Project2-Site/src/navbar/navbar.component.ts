import { Component, OnInit } from '@angular/core';

import { User } from '../shared/Models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
