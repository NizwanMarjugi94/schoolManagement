package com.nizwan.management.schoolsystemservice.repository;

import com.nizwan.management.schoolsystemservice.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course, Long> {
    void deleteCourseById (Long id);

    Optional <Course> findCourseById(Long id);
    Optional <Course> findCourseByCourseCode(String courseCode);

}
