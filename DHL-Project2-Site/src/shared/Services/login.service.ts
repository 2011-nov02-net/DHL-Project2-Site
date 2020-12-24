import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userSource: BehaviorSubject<User> = new BehaviorSubject(null);
  currentUser : Observable<User> = this.userSource.asObservable();

  constructor() {}

  setUser(user: User) {
    this.userSource.next(user);
  }
}
