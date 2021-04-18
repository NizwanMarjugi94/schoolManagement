import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private apiServerUrl = '';

    constructor (private http: HttpClient) { }

    public getAllStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.apiServerUrl}/student/findAllStudent`)
    }

    public addStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(`${this.apiServerUrl}/student/addStudent`, student)
    }
}