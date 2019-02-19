import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AuthorComponent implements OnInit {
authors;
 title :String;
  constructor(authorService: AuthorService) { 
    this.authors =authorService.getAuthors();
    this.title
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("btn was clicked", $event);
  }
  onDivClick() {
    console.log("dive was clicked");
  }
  ngOnInit() {
  }
  onClick(eventArgs) {
console.log("event clicked by user",eventArgs)
  }
}
