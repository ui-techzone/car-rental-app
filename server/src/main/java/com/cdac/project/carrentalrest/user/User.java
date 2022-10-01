package com.cdac.project.carrentalrest.user;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, length = 60)
	private String name;
	
	@Column(nullable = false, length = 120)
	private String address;
	
	@Column(nullable = false, length = 120)
	private String dob;
	
	@Column(nullable = false, length = 20)
	private String mobileno;
	
	@Column(nullable = false, unique = true , length = 39)
	private String email;
	
	@Column(nullable = false, length = 60)
	private String password;
	
	@Column(nullable = false)
	private Integer rollId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getRollId() {
		return rollId;
	}

	public void setRollId(Integer rollId) {
		this.rollId = rollId;
	}
	
	

}
