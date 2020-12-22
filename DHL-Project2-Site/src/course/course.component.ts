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
  email: string;
  user: User;
  selectedCourse: Course | any;
  constructor(private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.email = sessionStorage.getItem('currentEmail');
    this.getCourses();
  }

  async getCourses(): Promise<void> {
    this.courses = await this.courseService.getEnrollments(this.email).then(c => this.courses = c);
  }

  onSelect(course:Course):void {
    this.selectedCourse = course;
    console.log(this.selectedCourse);
  }

}
