import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  myCourses : Array<Course>;

  constructor(private courseService : CourseService) {
    this.courseService = this.courseService;
   }

  ngOnInit() {
    //this.myCourses = COURSES;
    this.courseService.getCourses().subscribe(courses => this.myCourses = courses);
  }

  delete(id : number){
   this.myCourses = this.courseService.delete(id);
   return this.myCourses;
  }

}
