package com.nizwan.management.schoolsystemservice.repository;

import com.nizwan.management.schoolsystemservice.model.Students;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Students, Long> {
    void deleteStudentById (Long id);

    Optional <Students> findStudentById(Long id);
}
