package com.nizwan.management.schoolsystemservice.service;


import com.nizwan.management.schoolsystemservice.exception.UserNotFoundException;
import com.nizwan.management.schoolsystemservice.model.Course;
import com.nizwan.management.schoolsystemservice.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepo;

    @Autowired
    public CourseService(CourseRepository courseRepo) {
        this.courseRepo = courseRepo;
    }


    public Course addCourse (Course course){
        return courseRepo.save(course);
    }

    public List<Course> findAllCourse(){
        return courseRepo.findAll();
    }

    public Course updateCourse(Course course){
        return courseRepo.save(course);
    }

    public Course findCourseById(Long id){
        return courseRepo.findCourseById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteCourse(Long id){
        courseRepo.deleteCourseById(id);
    }
}
