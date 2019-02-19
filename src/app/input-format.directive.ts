import { Directive,HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el:ElementRef) { }
@Input('appInputFormat') fromat;
  @HostListener('focus')  onFocus() {
  console.log("on Focus");
  } 
  @HostListener('blur') onblur(){
  let value :String =this.el.nativeElement.value;
  if(this.fromat=='lowercase')
  this.el.nativeElement.value=value.toLowerCase();
  else
  this.el.nativeElement.value=value.toUpperCase();
  }
  
}
