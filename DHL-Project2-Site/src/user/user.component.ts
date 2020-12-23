import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/Models/user.model';
import { UserService } from 'src/shared/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, 
              private userService: UserService,
              private fb: FormBuilder
              ) { }


    myForm: FormGroup;
    fullName: FormControl;
    email: FormControl;
    permission: FormControl;

  ngOnInit(): void {
    this.fullName = new FormControl('');
    this.email = new FormControl('');
    this.permission = new FormControl('');

    this.myForm = this.fb.group(
      {
        'fullName': this.fullName,
        'email': this.email,
        'permission': this.permission
      }

    )
  }

    

  async signUp() {
    debugger;
    console.log(this.myForm.get('fullName').value);
    console.log(this.myForm.get('email').value);
    var fullName = this.myForm.get('fullName').value;
    var email = this.myForm.get('email').value;
    sessionStorage.setItem('currentEmail', this.myForm.get('email').value);
    var newUser = new User(fullName, email);
    await this.userService.signUpUser(newUser);
    this.router.navigate(['/course']);
  }

}
