import { Component } from '@angular/core';

import { LoginService } from '../shared/Services/login.service';
import { User } from '../shared/Models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  email = sessionStorage.getItem('currentEmail');
  user: User;

  constructor(private data: LoginService) { }

  ngOnInit() {
    this.data.currentUser.subscribe(user => this.user = user)
  }
}
