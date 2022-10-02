package com.cdac.project.carrentalrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.project.carrentalrest.user.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query("SELECT u FROM User u WHERE u.email= ?1")
	User findByEmail(String email);
	

	@Query("SELECT u FROM User u WHERE  u.email =?1 AND u.rollId = 2")
	User findAdmin(String email);

}
