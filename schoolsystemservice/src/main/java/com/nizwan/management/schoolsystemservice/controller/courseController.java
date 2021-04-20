package com.nizwan.management.schoolsystemservice.controller;

import com.nizwan.management.schoolsystemservice.model.Course;
import com.nizwan.management.schoolsystemservice.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/course")
public class courseController {
    private final CourseService courseService;

    public courseController(CourseService courseService) {
        this.courseService = courseService;
    }


    @GetMapping("/findAllCourse")
    public ResponseEntity<List<Course>> getAllCourses () {
        List<Course> courses = courseService.findAllCourse();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long id) {
        Course course = courseService.findCourseById(id);
        return new ResponseEntity<>(course, HttpStatus.OK);
    }

    @PostMapping("/addCourse")
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        Course newCourse = courseService.addCourse(course);
        return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
    }

    @PutMapping("/updateCourse")
    public ResponseEntity<Course> updateCourse(@RequestBody Course course){
        Course updateCourse = courseService.updateCourse(course);
        return new ResponseEntity<>(updateCourse, HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/deleteCourse/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable("id") Long id){
        courseService.deleteCourse(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
