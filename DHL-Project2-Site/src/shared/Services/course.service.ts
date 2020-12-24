import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../Models/user.model';
import { Course } from '../Models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = `${environment.baseUrl}/api`;
  private userEmail = sessionStorage.getItem('currentEmail');
  private user : User;

  constructor(private http: HttpClient) { }

  httpOptions = {
	  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getUserByEmail(email: string) : Promise<User> {
    console.log("getUserByEmail");
  	return this.http.get<User>(`${this.baseUrl}/User/find/${email}`, this.httpOptions)
	    .toPromise();
  }

  async getEnrollments(email: string) : Promise<Course[]> {
    try {
      console.log("getEnrollments");
      this.user = await this.getUserByEmail(email);
      console.log(this.user.id);
      let url = `${this.baseUrl}/User/${this.user.id}/courses`;
      return this.http.get<Course[]>(url, this.httpOptions).toPromise();
    } catch (e) {
      return null
    }
  }

  async getInstructorCourses(email: string) : Promise<Course[]>{
    try {
      this.user = await this.getUserByEmail(email);
      let url = `${this.baseUrl}/Course/instructor/${this.user.id}`;
      return this.http.get<Course[]>(url, this.httpOptions).toPromise();
    } catch (e) {
      return null
    }
  }

  getAllCourses() : Promise<Course[]> {
	  return this.http.get<Course[]>(`${this.baseUrl}/Course`, this.httpOptions).toPromise();
  }

  enroll(courseId: number, userId: number) : Promise<any> {
	  return this.http.post(`${this.baseUrl}/Course/${courseId}/enrollment/${userId}`, this.httpOptions).toPromise();
  }
}
