package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.pojos.Student;
import com.demo.service.StudentServiceImpl;

@RestController
@RequestMapping(value = "/")
@CrossOrigin("*")
public class StudentController {
	@Autowired
	private StudentServiceImpl studService;

	@CrossOrigin("http://localhost:4200/")
	@GetMapping(value = "/list")
	public List<Student> findAllStudents() {
		return studService.getAllStudent();
	}

	@PostMapping(value = "/save")
	public Student register(@RequestBody Student stud) {
		return studService.addStudent(stud);
	}

	 @PutMapping("/update/{roll}")
	 public ResponseEntity<Student> updateStud(@PathVariable int roll,@RequestBody Student student){
		Student updated= this.studService.updateStudent(roll, student);
		return new ResponseEntity<Student>(updated,HttpStatus.OK);
		 
	 }

	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable int id) {
		this.studService.deleteStudent(id);
	}

	@GetMapping(value = "/getById/{id}")
	public Optional<Student> getStudent(@PathVariable int id) {
		return this.studService.getStudentById(id);
	}

}
