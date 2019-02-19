import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormCourseComponentComponent } from './new-form-course-component.component';

describe('NewFormCourseComponentComponent', () => {
  let component: NewFormCourseComponentComponent;
  let fixture: ComponentFixture<NewFormCourseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormCourseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormCourseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
