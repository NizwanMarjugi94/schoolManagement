package com.nizwan.management.schoolsystemservice.repository;

import com.nizwan.management.schoolsystemservice.model.Course;
import com.nizwan.management.schoolsystemservice.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {

    Optional <Course> findRegitrationById(Long id);
}
