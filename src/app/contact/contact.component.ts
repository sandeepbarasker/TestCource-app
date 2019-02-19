import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
contactMathods= [
  {id:1,name:'email'},
  {id:2,name:'phone'},
  {id:3,name:'message'},
  {id:4,name:'address'}
];
marietalStatus=[{
  id:1, name:'Single'
},
{
  id:2, name:'Married'
}
]
log (x) {
  console.log(x);
}
}
