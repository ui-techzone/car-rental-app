package com.cdac.project.carrentalrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.carrentalrest.car.Car;

public interface CarRepository extends JpaRepository<Car, Long> {

}
