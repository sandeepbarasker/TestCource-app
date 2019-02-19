import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidator  {
static CannotContainSpace(control:AbstractControl) : ValidationErrors | null {
    if((control.value as string ).indexOf(' ')>=0) {
        return {CannotContainSpace:true}
    }
}
static userNameUnique(control: AbstractControl):Promise<ValidationErrors|null> {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
          
            if(control. value==='sandeep')  {
                console.log("condition are true"+control.value);
                resolve({'userNameUnique':true});
            } else {resolve(null)};
                           
        }, 1000);
    });
    
}
}