import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-course-component',
  templateUrl: './new-form-course-component.component.html',
  styleUrls: ['./new-form-course-component.component.css']
})
export class NewFormCourseComponentComponent {

 form = new FormGroup({

   topics :new FormArray([])

 });


 constructor(fb:FormBuilder) {
this.form =fb.group({
  name:['', Validators.required],
  contact:fb.group({
    email:[],
    phone:[]
  }),
  topics :new FormArray([])
});

 }
 addTopic(topic:HTMLInputElement) {
   this.topics.push(new FormControl(topic.value));
  topic.value='';
 }

 removeTopic(topic:FormControl) {
  let index = this.topics.controls.indexOf(topic);
this.topics.removeAt(index);

}
 get topics() {
return this.form.get('topics')as FormArray;
 }
 }
