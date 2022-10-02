package com.cdac.project.carrentalrest.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.carrentalrest.repository.UserRepository;
import com.cdac.project.carrentalrest.user.User;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserResource {

	@Autowired
	UserRepository userRepository;

	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody User user) {
		if (user.getEmail() != null && user.getPassword() != null) {
			User user1 = userRepository.findByEmail(user.getEmail());
			if ((user1 != null) && user1.getPassword().equals(user.getPassword())) {
				return new ResponseEntity<User>(user1, HttpStatus.OK);
			}
		}
		 return new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);

	}

	@PostMapping("/registration")
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		user.setRollId(2);
		userRepository.save(user);
		return new ResponseEntity<String>("User Registered successfully", HttpStatus.OK);

	}
}
