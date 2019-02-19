import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { DataService } from './data-service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService extends DataService {

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http)
  }


}
