package com.cdac.project.carrentalrest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.carrentalrest.car.Car;
import com.cdac.project.carrentalrest.repository.CarRepository;
import com.cdac.project.carrentalrest.utility.Constant;

@RestController
public class CarResources {

	@Autowired
	CarRepository carRepository;
	
		// Service to add car
	@PostMapping("/addcar")
	public String name(@RequestBody Car car) {
		car.setStatus(Constant.AVAILABLE);
		carRepository.save(car);
		return "Car Added Successfully";
	}
	
	//Service to get car
	@GetMapping("/cars")
	public List<Car> getCars() {
		return carRepository.findAll();
		
	}
	
	@PutMapping("/cars/{id}")
	public String bookCar(@RequestBody Car car, @PathVariable Long id) {
		
		return "Car Booked successfully";
		
	}
}
