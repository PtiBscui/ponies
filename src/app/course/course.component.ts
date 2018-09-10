import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { Pony } from '../pony';
import { PONIES } from '../mock-ponies';
import { PonyComponent } from '../pony/pony.component';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  x: number = 10;
  courseModel: Course = new Course(this.x, null, "", new Array<Pony>());
  submitted = false;
  courseService: CourseService;
  listPonies: Array<Pony> = PONIES;

  constructor(courseService: CourseService) {
    this.courseService = courseService;
  }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
    if(this.courseService.getCourseById(this.courseModel.id_course)){
      this.courseService.updateCourse(this.courseModel);
      this.courseModel = new Course(this.x, null, "", new Array<Pony>());
    } else {
      this.courseService.addCourse(this.courseModel);
      this.courseModel = new Course(++this.x, null, "", new Array<Pony>());
    }
    
  }

  addPonyCourse(pony: Pony) {
    this.courseModel.ponies.forEach(function (p) {
      if (p.id_pony !== pony.id_pony) {
        this.courseModel.ponies.push(pony);
      }
    });
  }

  update(){
    let currentModel = this.courseService.myCourses.filter((courses) => courses.id_course == this.courseModel.id_course)[0];
    if(currentModel){
      this.courseModel.date = currentModel.date;
      this.courseModel.lieu = currentModel.lieu;
      this.courseModel.ponies = currentModel.ponies;
    }
  }

}
