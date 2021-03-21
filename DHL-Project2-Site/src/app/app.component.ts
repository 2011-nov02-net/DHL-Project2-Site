import { Component } from '@angular/core';

import { LoginService } from './service/login.service';
import { User } from './model/user.model';

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
