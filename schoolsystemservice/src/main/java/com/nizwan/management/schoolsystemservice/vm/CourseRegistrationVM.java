package com.nizwan.management.schoolsystemservice.vm;

import com.nizwan.management.schoolsystemservice.model.Students;

import java.util.List;

public class CourseRegistrationVM {
    private String courseName;
    private String courseCode;
    private List<Students> studentList;

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public List<Students> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Students> studentList) {
        this.studentList = studentList;
    }

    @Override
    public String toString() {
        return "courseRegistrationVM{" +
                "courseName='" + courseName + '\'' +
                ", courseCode='" + courseCode + '\'' +
                ", studentList=" + studentList +
                '}';
    }
}
