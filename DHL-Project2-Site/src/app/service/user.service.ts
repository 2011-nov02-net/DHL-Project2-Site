import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = `${environment.baseUrl}/api/User`;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': "application/json"})
  };

  constructor(private http: HttpClient) { }

  async getUserIdByEmail(email: string) : Promise<number> {
    let url = `${this.baseUrl}/find/${email}`;
    let user = await this.http.get<User>(url, this.httpOptions).toPromise();
    return user.id;
  }

  getUserByEmail(email: string) : Promise<User> {
    return this.http.get<User>(
        `${this.baseUrl}/find/${email}`,
        this.httpOptions
      ).toPromise();
  }

  getUserById(id: number): Promise<User> {
    // console.log("getUserById");
    let url = `${this.baseUrl}/${id}`;
    let user = this.http.get<User>(url, this.httpOptions).toPromise();
    return user;
  }

  async signUpUser(user: User): Promise<User> {
    let url = `${this.baseUrl}?name=${user.name}&email=${user.email}&permission=${user.permission}`;
    user = await this.http.post<User>(url, this.httpOptions).toPromise();
    return user;
  }

  async updateUser(user:User): Promise<User> {
    let url = `${this.baseUrl}/${user.id}?name=${user.name}&email=${user.email}&permission=${user.permission}`;
    user = await this.http.put<User>(url, this.httpOptions).toPromise();
    return user;
  }

}
