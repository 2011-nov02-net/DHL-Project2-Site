import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/Models/user.model';
import { UserService } from 'src/shared/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm: FormGroup;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({'fullName': new FormControl(''), 'email': new FormControl(''), 'permission': new FormControl(2)});
  }

  async signUp() {
    debugger;
    console.log(this.myForm.get('fullName').value);
    console.log(this.myForm.get('email').value);
    sessionStorage.setItem('currentEmail', this.myForm.get('email').value);
    let newUser = new User(this.myForm.get('fullName').value, this.myForm.get('email').value);
    await this.userService.signUpUser(newUser);
    this.router.navigate(['/course']);
  }

}
