

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourceService } from './courses/course.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorComponent } from './author/author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SummaryPipe } from './summary.pipe';
import { TitlecasePipe } from './titlecase.pipe';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewFormCourseComponentComponent } from './new-form-course-component/new-form-course-component.component';
import { HttpModule } from '@angular/http';
import { PostComponentComponent } from './post-component/post-component.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  RouterModule } from '@angular/router'
import { GithubProfileComponent } from './github-profile/github-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    SummaryPipe,
    TitlecasePipe,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    SignupFormComponent,
    NewFormCourseComponentComponent,
    PostComponentComponent,
    FollowersComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    GithubProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'followers/:id/:userName', component: GithubProfileComponent
      },
      {
        path: 'followers', component: FollowersComponent
      },
      
      {
        path: 'posts', component: PostComponentComponent
      },
      {
        path: '**', component: NotFoundComponent
      },
    
    ])

  ],
  providers: [CourceService, { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
