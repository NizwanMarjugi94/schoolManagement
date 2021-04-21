import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from './course';
import { CourseRegistration } from './courseregistration';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor (private http: HttpClient) { }

    public getAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(`${this.apiServerUrl}/course/findAllCourse`)
    }

    public getStudentByCourseCode(courseCode: string): Observable<CourseRegistration> {
        return this.http.get<CourseRegistration>(`${this.apiServerUrl}/registration/findStudentByCourseCode/${courseCode}`)
    }

    public addCourse(course: Course): Observable<Course> {
        return this.http.post<Course>(`${this.apiServerUrl}/course/addCourse`, course)
    }

    public updateCourse(course: Course): Observable<Course> {
        return this.http.put<Course>(`${this.apiServerUrl}/course/updateCourse`, course)
    }

    public deleteCourse(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/course/deleteCourse/${id}`)
    }
}