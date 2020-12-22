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
  private baseUrl = `${environment.baseUrl}/api/user`;
  private userEmail = sessionStorage.getItem('currentEmail');
  private user : User;

  constructor(private http: HttpClient) { }

  httpOptions = {
	  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getUserByEmail(email) : Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/find/${this.userEmail}`, this.httpOptions);
  }

  getEnrollments(email) : Observable<Course[]> {
    this.getUserByEmail(email).subscribe(u => this.user = u);
    return this.http.get<Course[]>(`${this.baseUrl}/${this.user.Id}/courses`, this.httpOptions);
  }
}
