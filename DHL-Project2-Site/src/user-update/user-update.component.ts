import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/Models/user.model';
import { UserService } from 'src/shared/Services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private router: Router, 
    private userService: UserService,
    private fb: FormBuilder
  ) { }
  myForm: FormGroup;
    fullName: FormControl;
    email: FormControl;
    permission: FormControl;

  user: User;
  id: number;

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

  async userUpdate() {
    this.user = await this.userService.getUserById(this.id).then(u => this.user = u);
    console.log(this.myForm.get('fullName').value);
    console.log(this.myForm.get('email').value);
    sessionStorage.setItem('currentEmail', this.myForm.get('email').value);
    this.user.fullName = this.myForm.get('fullName').value;
    this.user.email = this.myForm.get('email').value;
    await this.userService.updateUser(this.user);
  }

}
