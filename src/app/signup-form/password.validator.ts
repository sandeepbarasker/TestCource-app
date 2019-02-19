
import { ValidationErrors, AbstractControl } from "@angular/forms";


export class PasswordValidator {

static passwordUnique(control:  AbstractControl) :Promise<ValidationErrors | null>{
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(control.value ==='password') 
                resolve({passwordUnique:true});
                else
                resolve(null);
                           
        }, 2000);
    });
    
}

}