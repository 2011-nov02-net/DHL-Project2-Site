import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user : User;
  constructor() { }

  ngOnInit(): void {
  }

}
