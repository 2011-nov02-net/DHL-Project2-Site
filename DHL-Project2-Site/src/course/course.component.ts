import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../shared/Services/course.service';

import { Course } from '../shared/Models/course.model';
import { User } from '../shared/Models/user.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] | Course;
  instructorCourse: Course[] | Course;
  email: string;
  user: User;
  selectedCourse: Course | any;
  columnsToDisplay = ['id', 'name', 'description'];
  constructor(private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('currentEmail');
    this.getCourses();
    this.getInstructorCourses();
  }

  async getCourses(): Promise<void> {
    this.courses = await this.courseService.getEnrollments(this.email).then(c => this.courses = c);
  }

  async getInstructorCourses(): Promise<void> {
    this.instructorCourse = await this.courseService.getInstructorCourses(this.email).then(c => this.instructorCourse = c);
  }

  onSelect(course:Course):void {
    this.selectedCourse = course;
    console.log(this.selectedCourse);
  }

}
