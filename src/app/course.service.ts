import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { COURSES } from './mock-courses';
import { Course } from './course';

@Injectable()
export class CourseService {

  myCourses = new Array<Course>();

  constructor() {
    this.myCourses = COURSES;
  }

  getCourses(): Observable<Course[]> {
    return Observable.of(this.myCourses);
  }

  addCourse(course: Course) {
    this.myCourses.push(course);
  }


  updateCourse(course : Course) {
    for(let c of this.myCourses){
      if(course.id_course == c.id_course){
        c.date = course.date;
        c.lieu = course.lieu;
        c.ponies = course.ponies;
      }
    }
  }

  getCourseById(id: number) {
    let course = this.myCourses.filter((courses) => courses.id_course == id)[0];
    if (course != null) {
      return true;
    } else {
      return false;
    }
  }

  delete(id: number) {
    this.myCourses = this.myCourses.filter((courses) => courses.id_course != id);
    return this.myCourses;
  }

}
