import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = `${environment.baseUrl}/api/User`;
  private userEmail = sessionStorage.getItem('currentEmail');
  private user : User;

  constructor(private http: HttpClient) { }

  httpOptions = {
	  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getUserByEmail(email: string) : Promise<User> {
    console.log("getUserByEmail");
    debugger;
  	return this.http.get<User>(`${this.baseUrl}/find/${email}`, this.httpOptions)
	    .toPromise();
  }

  async getEnrollments(email: string) : Promise<Course[]> {
    console.log("getEnrollments");
    debugger;
    await this.getUserByEmail(email).then(u => this.user = u);
    return this.http.get<Course[]>(`${this.baseUrl}/${this.user.Id}/courses`, this.httpOptions)
      .toPromise();
  }
}
