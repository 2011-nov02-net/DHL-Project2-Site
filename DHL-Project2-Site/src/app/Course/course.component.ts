import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { CourseService } from '../shared/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] | any;
  selectedCourse: Course | any;
  constructor(private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const email = sessionStorage.get('email');
    this.courseService.getEnrollments(email)
    .subscribe(course => this.courses = course);
  }

  onSelect(course:Course):void {
    this.selectedCourse = course;
    console.log(this.selectedCourse);
  }

}
