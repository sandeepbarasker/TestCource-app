import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers : any[]
  constructor(
    private route : ActivatedRoute,
    private service : GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).switchMap(combined=>{
      let id= combined[0].get('id');
      let page =combined[1].get('page')
     return this.service.getAll();
    }).subscribe(followers=>this.followers=followers);
    
    
    
    /* this.route.paramMap.subscribe(); */
   /*  this.route.snapshot.paramMap.get('id') */

  }

}
