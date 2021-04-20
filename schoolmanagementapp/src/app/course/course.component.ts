import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public  course: Course[];
  public editCourse: Course;
  public deleteCourse: Course;

  constructor (private courseService: CourseService){}

  ngOnInit(){
    this.getAllCourses();
  }
  
  public getAllCourses():void {
    this.courseService.getAllCourses().subscribe(
      (response: Course[]) => {
        this.course = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onAddCourse(addForm: NgForm): void {
    document.getElementById('add-course-form').click();
    this.courseService.addCourse(addForm.value).subscribe(
      (response: Course) => {
        console.log(response);
        this.getAllCourses();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCourse(student: Course): void {
    this.courseService.updateCourse(student).subscribe(
      (response: Course) => {
        console.log(response);
        this.getAllCourses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCourse(id: number): void {
    this.courseService.deleteCourse(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllCourses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCourse(key: string): void {
    console.log(key);
    const results: Course[] = [];
    for (const course of this.course) {
      if (course.courseName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || course.courseCode.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || course.courseDescription.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || course.courseInstructor.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(course);
      }
    }
    this.course = results;
    if (results.length === 0 || !key) {
      this.getAllCourses();
    }
  }

  public onOpenModal(courseModal: Course, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCourseModal');
    }
    if (mode === 'edit') {
      this.editCourse = courseModal;
      button.setAttribute('data-target', '#updateCourseModal');
    }
    if (mode === 'delete') {
      this.deleteCourse = courseModal;
      button.setAttribute('data-target', '#deleteCourseModal');
    }
    container.appendChild(button);
    button.click();
  }
}
