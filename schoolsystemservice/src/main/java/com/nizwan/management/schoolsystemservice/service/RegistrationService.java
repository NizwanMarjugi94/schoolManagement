package com.nizwan.management.schoolsystemservice.service;


import antlr.StringUtils;
import com.nizwan.management.schoolsystemservice.model.Registration;
import com.nizwan.management.schoolsystemservice.model.Students;
import com.nizwan.management.schoolsystemservice.repository.CourseRepository;
import com.nizwan.management.schoolsystemservice.repository.RegistrationRepository;
import com.nizwan.management.schoolsystemservice.repository.StudentRepository;
import com.nizwan.management.schoolsystemservice.vm.CourseRegistrationVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class RegistrationService {
    private final RegistrationRepository registrationRepo;
    private final CourseRepository courseRepo;
    private final StudentRepository studentRepo;


    @Autowired
    public RegistrationService(RegistrationRepository registrationRepo, CourseRepository courseRepo, StudentRepository studentRepo) {
        this.registrationRepo = registrationRepo;
        this.courseRepo = courseRepo;
        this.studentRepo = studentRepo;
    }


    public Registration addRegistration (Registration registration){
        return registrationRepo.save(registration);
    }

    public static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
        Set<Object> seen = ConcurrentHashMap.newKeySet();
        return t -> seen.add(keyExtractor.apply(t));
    }

    public CourseRegistrationVM getStudentByCourseCode (String CourseCode){

        CourseRegistrationVM courseRegistrationVM = new CourseRegistrationVM();
        List<Registration> registration = registrationRepo.findAll();
        String StudentId = registration.stream().filter(g -> g.getStudentId() != null).filter(h -> h.getCourseCode().equals(CourseCode)).filter(distinctByKey(e -> e.getStudentId())).map(f -> f.getStudentId()).collect(Collectors.joining(", "));
        
        List<Students> students = studentRepo.findAll();
        List<Students> newStudents = new ArrayList<>();;
        for (Students st : students){
            if (StudentId.contains(st.getStudentId())){
                Students student = new Students();
                student.setStudentName(st.getStudentName());
                student.setStudentId(st.getStudentId());
                student.setStudentAge(st.getStudentAge());
                student.setStudentClassroom(st.getStudentClassroom());
                newStudents.add(student);
            }
        }
        courseRegistrationVM.setCourseCode(CourseCode);
        courseRegistrationVM.setStudentList(newStudents);
        return courseRegistrationVM;
    }

}
