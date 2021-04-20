import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Students } from './students';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor (private http: HttpClient) { }

    public getAllStudents(): Observable<Students[]> {
        return this.http.get<Students[]>(`${this.apiServerUrl}/student/findAllStudent`)
    }

    public addStudent(student: Students): Observable<Students> {
        return this.http.post<Students>(`${this.apiServerUrl}/student/addStudent`, student)
    }

    public updateStudent(student: Students): Observable<Students> {
        return this.http.put<Students>(`${this.apiServerUrl}/student/updateStudent`, student)
    }

    public deleteStudent(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/student/deleteStudent/${id}`)
    }
}