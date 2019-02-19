import{Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: String, args?: any) {
       if(!value)
       return null;
       let actualLimit = (args)? args:50
       return value.substring(0,actualLimit);

    }

}