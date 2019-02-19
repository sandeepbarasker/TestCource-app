import { Http } from "@angular/http";
import { Observable, observable } from "rxjs";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";
import { appError } from "../common/app-error";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
export class DataService {

    constructor(private url:string ,private http:Http) {
        
    }
        getAll() {
            return this. http.get(this.url)
            .map(Response=>Response.json())
            .catch(this.handleError);
           
           }
         
           create(resource) {
             
             return this.http.post(this.url, JSON.stringify(resource))
             .map(Response=>Response.json()).catch(this.handleError); 
           }
           update (resource) {
             return this.http.patch(this.url+'/'+resource.id, JSON.stringify({isRead:true}))
             .map(Response=>Response.json()).catch(this.handleError);
           }
           delete(id) {
             return this.http.delete(this.url+'/'+id)
             .map(Response=>Response.json()).catch(this.handleError);
           
           }
           
           private handleError (error:Response) {
             if(error.status===404) {
               return Observable.throw(new NotFoundError());
               } else if(error.status===400) {
                 return Observable.throw(new BadInput(error.json()));
               }
               else {
                        
                 return Observable.throw (new appError(error));
               }
         
           }
    
}