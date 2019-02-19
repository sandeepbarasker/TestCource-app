import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostServiceService } from '../services/post-service.service';
import { appError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  posts: any[];

  constructor(private service: PostServiceService) {

  }

  ngOnInit(): void {
    this.service.getAll().subscribe(post =>this.posts =post);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.posts.splice(0, 0, post);

    input.value = '';
   
    this.service.create(post).subscribe(newPost => {
      post['id'] = newPost.id;
     
      }, 
    (error:appError) => {
      this.posts.splice(0,1);

      if(error instanceof BadInput) {
      
        //this.form.setError(error.orignalError());
      } else {
       throw error
      }
      
    });
  }
  updatePost(post) {
    /* this.http.put(this.url ,JSON.stringify(post)); */
    this.service.update(post).subscribe(updatePost => {
      console.log(updatePost);
    },
    (error :appError) => {
      if (error instanceof NotFoundError) {

      } else {
        throw error
      }
      
    });

  }
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(305).subscribe(null ,
    (error :appError)=>  {
      this.posts.splice(index,0,post);

       if(error instanceof NotFoundError) {
         alert('this post has already been delered..')
       }else {
        throw error
       }
      
    });
  }
}
