import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/Models/user.model';
import { UserService } from 'src/shared/Services/user.service';
import { CourseService } from '../shared/Services/course.service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private courseService: CourseService
  ) { }
  myForm: FormGroup;
    name: FormControl;
    email: FormControl;

  user: User;
  id: number;
  emailString: string;
  NameString: string;

  ngOnInit(): void {
    this.emailString = sessionStorage.getItem('currentEmail');
    this.NameString = sessionStorage.getItem('currentName');
    this.name = new FormControl('');
    this.email = new FormControl('');

    this.myForm = this.fb.group(
      {
        'name': this.name,
        'email': this.email,
      }

    )
  }

  async userUpdate() {
    this.user = await this.courseService.getUserByEmail(this.emailString).then(u => this.user = u);
    console.log(this.myForm.get('name').value);
    console.log(this.myForm.get('email').value);
    sessionStorage.setItem('currentEmail', this.myForm.get('email').value);
    sessionStorage.setItem('currentName', this.myForm.get('name').value)
    this.user.name = this.myForm.get('name').value;
    this.user.email = this.myForm.get('email').value;
    await this.userService.updateUser(this.user);
    this.router.navigate(['/course']);
  }

}
