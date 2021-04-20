import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Students } from './students';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public student: Students[];
  public editStudent: Students;
  public deleteStudent: Students;

  constructor (private studentService: StudentsService){}

  ngOnInit(){
    this.getAllStudents();
  }
  
  public getAllStudents():void {
    this.studentService.getAllStudents().subscribe(
      (response: Students[]) => {
        this.student = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onAddStudent(addForm: NgForm): void {
    document.getElementById('add-student-form').click();
    this.studentService.addStudent(addForm.value).subscribe(
      (response: Students) => {
        console.log(response);
        this.getAllStudents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateStudent(student: Students): void {
    this.studentService.updateStudent(student).subscribe(
      (response: Students) => {
        console.log(response);
        this.getAllStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStudent(key: string): void {
    console.log(key);
    const results: Students[] = [];
    for (const student of this.student) {
      if (student.studentName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.studentId.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.studentClassroom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.studentAge.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.studentGender.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(student);
      }
    }
    this.student = results;
    if (results.length === 0 || !key) {
      this.getAllStudents();
    }
  }

  public onOpenModal(studentModal: Students, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addStudentModal');
    }
    if (mode === 'edit') {
      this.editStudent = studentModal;
      button.setAttribute('data-target', '#updateStudentModal');
    }
    if (mode === 'delete') {
      this.deleteStudent = studentModal;
      button.setAttribute('data-target', '#deleteStudentModal');
    }
    container.appendChild(button);
    button.click();
  }
}
