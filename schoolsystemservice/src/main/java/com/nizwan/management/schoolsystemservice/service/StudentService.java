package com.nizwan.management.schoolsystemservice.service;


import com.nizwan.management.schoolsystemservice.exception.UserNotFoundException;
import com.nizwan.management.schoolsystemservice.model.Students;
import com.nizwan.management.schoolsystemservice.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentService {
    private final StudentRepository studentRepo;

    @Autowired
    public StudentService(StudentRepository studentRepo){
        this.studentRepo = studentRepo;
    }

    public Students addStudent (Students student){
        return studentRepo.save(student);
    }

    public List<Students> findAllStudents(){
        return studentRepo.findAll();
    }

    public Students updateStudent(Students student){
        return studentRepo.save(student);
    }

    public Students findStudentById(Long id){
        return studentRepo.findStudentById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteStudent(Long id){
        studentRepo.deleteStudentById(id);
    }
}
