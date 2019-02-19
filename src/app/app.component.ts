import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode='map';
  title = 'TestCourseApp';
  tweet ={
    body:'..........',
    likeCount:10,
    isLiked: true
  };
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `icon_label`,
    //  `./assets/uE6A1-star_o.svg`
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/uE6A1-star_o.svg")
    );
  }
  
}
