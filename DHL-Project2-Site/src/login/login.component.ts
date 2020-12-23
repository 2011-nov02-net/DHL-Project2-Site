import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../shared/Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  // email = new FormControl('');
  user:User
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({'email': new FormControl('')});

  }

  loginUser() {
    debugger;
    console.log(this.myForm.get('email').value);
    sessionStorage.setItem('currentEmail', this.myForm.get('email').value );
    this.router.navigate(['/course']);
  }

}
