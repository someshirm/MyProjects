package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.pojos.Student;
import com.demo.repos.StudentRepo;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepo studRepo;

	@Override
	public Student addStudent(Student stud) {
		return studRepo.save(stud);

	}

	@Override
	public Student updateStudent(int id, Student stud) {
		Student student = this.studRepo.findById(id).orElseThrow(() -> new RuntimeException());
		student.setRoll(stud.getRoll());
		student.setName(stud.getName());
		student.setCity(stud.getCity());
		this.studRepo.save(student);
		return student;
	}

	@Override
	public void deleteStudent(int id) {

		studRepo.deleteById(id);
	}

	@Override
	public Optional<Student> getStudentById(int id) {
		return this.studRepo.findById(id);

	}

	@Override
	public List<Student> getAllStudent() {

		return studRepo.findAll();
	}

}
