import { Pipe, PipeTransform, ValueProvider } from '@angular/core';


@Pipe({
  name: 'titleCase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: String, args?: any): any {
    if(!value) return null;
    
    let words = value.split(' ');
    for(var i =0; i <words.length;i++) {
      let word = words[i];
      if (i> 0 && this.isPreposition (word)) {
        words[i] =word.toLocaleLowerCase();
       } else{
         words[i] =this.toTitleCase(word);
       }
    }
    return words.join(' ');
  }

  private isPreposition(word:string ):boolean {
    let preposition = ['of','the'];

    return preposition.includes(word.toLocaleLowerCase()) ;
    
  }
  private toTitleCase(word :string): string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }

  
}
