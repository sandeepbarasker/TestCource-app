import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
@Input('title') title:string
 isExpanded: boolean;

 constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer){
  this.matIconRegistry.addSvgIcon(
    `exPendIcon`,
  //  `./assets/uE6A1-star_o.svg`
    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/uE603-angle_down.svg")
  );
  this.matIconRegistry.addSvgIcon(
    `upicon`,
    //'../assets/uE606-angle_up.svg'
    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/uE606-angle_up.svg")
  );
  }

 toggle() {
   this.isExpanded =!this.isExpanded;
 }
  

}
