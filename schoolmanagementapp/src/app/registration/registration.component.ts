import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../course/course';
import { Students } from '../student/students';
import { Registration } from './registration';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  student: Students[];
  course: Course[];

  constructor (private registrationService: RegistrationService){}


  ngOnInit(){
    this.getAllStudents();
    this.getAllCourses();
  }

  public getAllStudents():void {
    this.registrationService.getAllStudents().subscribe(
      (response: Students[]) => {
        this.student = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public getAllCourses():void {
    this.registrationService.getAllCourses().subscribe(
      (response: Course[]) => {
        this.course = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onAddRegistration(addForm: NgForm): void {
    document.getElementById('add-registration-form').click();
    this.registrationService.addRegistration(addForm.value).subscribe(
      (response: Registration) => {
        console.log(response);
        this.getAllCourses();
        this.getAllStudents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
