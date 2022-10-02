package com.cdac.project.carrentalrest.resources;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.carrentalrest.car.Car;
import com.cdac.project.carrentalrest.repository.CarRepository;
import com.cdac.project.carrentalrest.repository.UserRepository;
import com.cdac.project.carrentalrest.utility.Constant;

@RestController
@CrossOrigin("http://localhost:3000")
public class CarResources {

	@Autowired
	CarRepository carRepository;
	
	@Autowired
	UserRepository userRepository;
	
		// Service to add car by admin
	@PostMapping("/addcar")
	public String addCar(@RequestBody Car car, @RequestParam String email) {
		if (userRepository.findAdmin(email) != null ) {
		car.setStatus(Constant.AVAILABLE);
		carRepository.save(car);
		return "Car Added Successfully";
		}
		return "Only Admin can Add the car";
	}
	
	//Service to get car
	@GetMapping("/cars")
	public List<Car> getCars() {
		return carRepository.findAll();
		
	}
	
	@PutMapping("/cars")
	public String bookCar(@RequestParam Long id) {
		Car car = carRepository.getById(id);
		car.setStatus(Constant.BOOKED);
		carRepository.save(car);
		return "Car Booked successfully";
		
	}
	
	
	@PutMapping("/return")
	public String returnCar(@RequestParam Long id) {
		Car car = carRepository.getById(id);
		car.setStatus(Constant.AVAILABLE);
		carRepository.save(car);
		return "Car Return successfully";
		
	}
}
