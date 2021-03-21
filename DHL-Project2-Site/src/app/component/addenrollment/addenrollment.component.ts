import { Component, ViewChild, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';
import { User } from 'src/app/model/user.model';
import { CourseService } from 'src/app/service/course.service';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addenrollment',
  templateUrl: './addenrollment.component.html',
  styleUrls: ['./addenrollment.component.css']
})
export class AddenrollmentComponent implements OnInit {
  allCourses: Course[] = [];
  userCourses: Course[] = [];
  notEnrolledCourses: Course[] = [];
  user: User;
  email: string;
  columnsToDisplay: string[] = ['id', 'name', 'description', 'enroll'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private courseService: CourseService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.email = sessionStorage.getItem('currentEmail');
	  this.user = await this.courseService.getUserByEmail(this.email).then(u => this.user = u);
    this.allCourses = await this.getAllCourses();
    this.userCourses = await this.getUserCourses();
    this.getCoursesNotEnrolledIn();
  }

  getAllCourses(): Promise<Course[]>{
    return this.courseService.getAllCourses()
      .then(c => this.allCourses = c);
  }

  getUserCourses(): Promise<Course[]>{
    return this.courseService.getEnrollments(this.email).then(c => this.userCourses = c);
  }

  getCoursesNotEnrolledIn(): void {
    let i,j;
    for(i = 0; i < this.allCourses.length; i++){
      let isCourse = false;
      for(j = 0; j < this.userCourses.length; j++){
        if(this.allCourses[i].id === this.userCourses[j].id){
          isCourse = true;
          break;
        }
      }
      if(!isCourse){
        this.notEnrolledCourses.push(this.allCourses[i]);
      }
    }
    this.table.renderRows();
  }

  async addEnrollment(courseId: number, userId: number): Promise<void> {
    await this.courseService.enroll(courseId, userId).then();
    this.router.navigate(['/course']);
  }

}
