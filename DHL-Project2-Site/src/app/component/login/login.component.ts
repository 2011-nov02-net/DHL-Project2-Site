import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../service/login.service';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  user: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private data: LoginService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({'email': new FormControl('')});

  }

  async loginUser() {
    try {
      let email = this.myForm.get('email').value;
      console.log(email);
      this.user = await this.userService.getUserByEmail(email);
      this.data.setUser(this.user);
      sessionStorage.setItem('currentEmail', email );
      this.router.navigate(['/course']);
    } catch (e) {
      alert('Login failed');
    }
  }

}
