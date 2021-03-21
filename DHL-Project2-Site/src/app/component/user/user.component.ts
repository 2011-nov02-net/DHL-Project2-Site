import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  myForm: FormGroup;
  name: FormControl;
  email: FormControl;
  permission: FormControl;

  ngOnInit(): void {
    this.name = new FormControl('');
    this.email = new FormControl('');
    this.permission = new FormControl('');

    this.myForm = this.fb.group({
      'name': this.name,
      'email': this.email,
      'permission': this.permission
    })
  }

  async signUp() {
    var name = this.myForm.get('name').value;
    var email = this.myForm.get('email').value;
    var newUser = new User(name, email);

    console.log(name);
    console.log(email);

    sessionStorage.setItem('currentEmail', email);

    try{
      await this.userService.signUpUser(newUser);
      this.router.navigate(['/course']);
    } catch (e) {
      this.router.navigate(['/'])
    }
  }

}
