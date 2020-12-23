import { Component, OnInit } from '@angular/core';
import { Course } from 'src/shared/Models/course.model';
import { User } from 'src/shared/Models/user.model';
import { CourseService } from 'src/shared/Services/course.service';

@Component({
  selector: 'app-addenrollment',
  templateUrl: './addenrollment.component.html',
  styleUrls: ['./addenrollment.component.css']
})
export class AddenrollmentComponent implements OnInit {
  allCourses: Course[];
  userCourses: Course[];
  user: User;
  email: string;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('currentEmail');
    this.courseService.getUserByEmail(this.email).then(u => this.user = u);
    this.getAllCourses();
    this.getUserCourses();
  }

  async getAllCourses(): Promise<void>{
    await this.courseService.getAllCourses()
      .then(c => this.allCourses = c);
  }

  async getUserCourses(): Promise<void>{
    await this.courseService.getEnrollments(this.email).then(c => this.userCourses = c);
  }

  getCoursesNotEnrolledIn(): void {
    
  }

}
