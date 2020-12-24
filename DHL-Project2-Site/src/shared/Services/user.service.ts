import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  user: User;
  private baseUrl = `${environment.baseUrl}/api`;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': "application/json"})
  };

  getUserById(id: number): Promise<User> {
    console.log("getUserById");
    return this.http.get<User>(`${this.baseUrl}/User/${id}`, this.httpOptions)
	    .toPromise(); 
  }

  signUpUser(user:User): Promise<User> {
    return this.http.post<User>(`${this.baseUrl}/User?name=${user.fullName}&email=${user.email}&permission=${user.permission}`, this.httpOptions)
    .toPromise();
  }

  async updateUser(user:User): Promise<User> {
    return this.http.put<User>(`${this.baseUrl}/User/${user.id}?name=${user.fullName}&email=${user.email}&permission=${user.permission}`, this.httpOptions)
    .toPromise();
  }
  
}
