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
  notEnrolledCourses: Course[] = null;
  user: User;
  email: string;
  columnsToDisplay = ['id', 'name', 'description'];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('currentEmail');
	  this.courseService.getUserByEmail(this.email).then(u => this.user = u);
    this.getAllCourses();
    this.getUserCourses();
    this.getCoursesNotEnrolledIn();
  }

  async getAllCourses(): Promise<void>{
    await this.courseService.getAllCourses()
      .then(c => this.allCourses = c);
  }

  async getUserCourses(): Promise<void>{
    await this.courseService.getEnrollments(this.email).then(c => this.userCourses = c);
  }

  getCoursesNotEnrolledIn(): void {
    debugger;  
    let map = {};
    this.userCourses.forEach(item =>{
      map[item.name] = "Y";
    })
    this.allCourses.forEach(item =>{
      if(map[item.name] !== "Y"){
        this.notEnrolledCourses.push(item);
      }
    })
  }

}
