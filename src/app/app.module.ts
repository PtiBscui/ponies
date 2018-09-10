import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

//import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';

import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { PonyComponent } from './pony/pony.component';
import { PonyService } from './pony.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { PonyDetailsComponent } from './pony-details/pony-details.component';

const appRoutes : Routes = [
  { path : 'Ponies', component : PoniesComponent },
  { path : 'Pony', component : PonyComponent },
  { path : 'Courses', component : CoursesComponent },
  { path : 'Course', component : CourseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    PonyComponent,
    CoursesComponent,
    CourseComponent,
    PonyDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CalendarModule,
    ListboxModule,
    InputTextModule,
    CarouselModule
  ],
  providers: [PonyService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
