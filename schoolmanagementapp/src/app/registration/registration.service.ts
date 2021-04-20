import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../course/course';
import { Students } from '../student/students';
import { Registration } from './registration';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor (private http: HttpClient) { }

    public getAllStudents(): Observable<Students[]> {
        return this.http.get<Students[]>(`${this.apiServerUrl}/student/findAllStudent`)
    }

    public getAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(`${this.apiServerUrl}/course/findAllCourse`)
    }

    public addRegistration(registration: Registration): Observable<Registration> {
        return this.http.post<Registration>(`${this.apiServerUrl}/registration/addRegistration`, registration)
    }

    // public addStudent(student: Students): Observable<Students> {
    //     return this.http.post<Students>(`${this.apiServerUrl}/student/addStudent`, student)
    // }

    // public updateStudent(student: Students): Observable<Students> {
    //     return this.http.put<Students>(`${this.apiServerUrl}/student/updateStudent`, student)
    // }

    // public deleteStudent(id: number): Observable<void> {
    //     return this.http.delete<void>(`${this.apiServerUrl}/student/deleteStudent/${id}`)
    // }
}