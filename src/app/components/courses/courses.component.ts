import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];
  coursesCount = "";
  constructor(dataService: DataService) {
    this.courses = dataService.getCourses();
    this.coursesCount = "3";
   }

  ngOnInit(): void {
  }

}
