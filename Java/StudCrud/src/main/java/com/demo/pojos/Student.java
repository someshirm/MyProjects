package com.demo.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Student {

	@Id
	 
	private Integer roll;
	@Column(name = "Student_Name", length = 20)
	private String name;
	@Column(name = "Student_City", length = 20)
	private String city;
	
	
 
	
	

	public Student(Integer roll, String name, String city) {
		this.roll = roll;
		this.name = name;
		this.city = city;
	}
   
	


	public Student() {
	}



	public Integer getRoll() {
		return roll;
	}

	public void setRoll(Integer roll) {
		this.roll = roll;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "Student [roll=" + roll + ", name=" + name + ", city=" + city + "]";
	}

}
