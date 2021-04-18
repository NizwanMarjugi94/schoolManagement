package com.management.schoolsystem.service;

import com.management.schoolsystem.exception.UserNotFoundException;
import com.management.schoolsystem.model.Student;
import com.management.schoolsystem.repository.StudentRepository;
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

    public Student addStudent (Student student){
        student.setStudentId(UUID.randomUUID().toString());
        return studentRepo.save(student);
    }

    public List<Student> findAllStudents(){
        return studentRepo.findAll();
    }

    public Student updateStudent(Student student){
        return studentRepo.save(student);
    }

    public Student findStudentById(Long id){
        return studentRepo.findStudentById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteStudent(Long id){
        studentRepo.deleteStudentById(id);
    }
}
