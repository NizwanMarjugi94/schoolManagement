package com.nizwan.management.schoolsystemservice.controller;

import com.nizwan.management.schoolsystemservice.model.Course;
import com.nizwan.management.schoolsystemservice.model.Registration;
import com.nizwan.management.schoolsystemservice.service.RegistrationService;
import com.nizwan.management.schoolsystemservice.vm.CourseRegistrationVM;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/registration")
public class registrationController {
    private final RegistrationService registrationService;

    public registrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }


//    @GetMapping("/findAllCourse")
//    public ResponseEntity<List<Course>> getAllCourses () {
//        List<Course> courses = courseService.findAllCourse();
//        return new ResponseEntity<>(courses, HttpStatus.OK);
//    }
//
    @GetMapping("/findStudentByCourseCode/{courseCode}")
    public ResponseEntity<CourseRegistrationVM> getStudentByCourseCode(@PathVariable("courseCode") String courseCode) {
        CourseRegistrationVM courseRegistrationVM = registrationService.getStudentByCourseCode(courseCode);
        return new ResponseEntity<>(courseRegistrationVM, HttpStatus.OK);
    }

    @PostMapping("/addRegistration")
    public ResponseEntity<Registration> addRegistration(@RequestBody Registration registration){
        Registration newRegistration = registrationService.addRegistration(registration);
        return new ResponseEntity<>(newRegistration, HttpStatus.CREATED);
    }

//    @PutMapping("/updateCourse")
//    public ResponseEntity<Course> updateCourse(@RequestBody Course course){
//        Course updateCourse = courseService.updateCourse(course);
//        return new ResponseEntity<>(updateCourse, HttpStatus.OK);
//    }
//
//    @Transactional
//    @DeleteMapping("/deleteCourse/{id}")
//    public ResponseEntity<?> deleteCourse(@PathVariable("id") Long id){
//        courseService.deleteCourse(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
