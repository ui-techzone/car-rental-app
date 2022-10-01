package com.cdac.project.carrentalrest.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.carrentalrest.repository.UserRepository;
import com.cdac.project.carrentalrest.user.User;

@RestController
public class UserResource {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/login")
	public String login() {
		return "Hello Tech-zone";
	}
	
	@PostMapping ("/registration")
	public String registerUser( @RequestBody User user) {
		user.setRollId(1);
		userRepository.save(user);
		return "User Registered successfully";
		
	}
}
