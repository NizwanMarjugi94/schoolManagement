import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'schoolmanagementapp';
  public student: Student[];

  constructor (private studentService: StudentService){}

  ngOnInit(){
    this.getAllStudents();
  }
  
  public getAllStudents():void {
    this.studentService.getAllStudents().subscribe(
      (response: Student[]) => {
        this.student = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
}
