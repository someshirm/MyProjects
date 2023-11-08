package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.pojos.Student;

public interface StudentService {
	
	Student addStudent(Student stud);

	Student updateStudent(int id,Student stud);

	void deleteStudent(int id);

	Optional<Student> getStudentById(int id);

	List<Student> getAllStudent();

}
