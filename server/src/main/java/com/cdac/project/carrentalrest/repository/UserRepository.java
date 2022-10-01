package com.cdac.project.carrentalrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.carrentalrest.user.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
