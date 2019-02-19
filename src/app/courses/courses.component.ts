import { Component, OnInit } from '@angular/core';
import { CourceService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courses ;
email ="myemail@abc.com";
title    ='List Of Courses'
  constructor(courseService :CourceService) { 
  
    this.courses = courseService.getCourses();
  }
  keyUpMethod() {
    console.log(this.email);
  }

  onAdd() {
   let num= this.courses.length+1
    this.courses.push('course'+num);
  }
  onRemove(course) {
   let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  ngOnInit() {
  }
coursedata={
  sid:'101', 
  sname:'pol',
  sage:'25',
  fee:'2124454',
  discount:'25.12',
  dob:'09/25/2018'
}
courseCategory=[
  {id:1,name:'Engineer'},
  {id:2,name:'MCA'},
  {id:2,name:'BTECH'},
  {id:2,name:'BA'},
  {id:2,name:'BSc'},
]
text=`this is summry of value created custom pipe`

log(x) {
  console.log(x)
}
}
