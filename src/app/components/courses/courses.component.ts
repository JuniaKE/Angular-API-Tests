import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: string[] = [];
  coursesCount = "";
  constructor(public dataService: DataService) {
    this.courses = dataService.getCourses();
    this.coursesCount = "3";
   }

   
  addCourse(data:any) {
    this.dataService.addCourse(data.value.name);
    console.log('Posting ', data.value.name);
  }
  deleteCourse(course: any){
    this.dataService.deleteCourse(course);
  }
}
