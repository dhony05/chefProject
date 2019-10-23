package com.collabera.chefProject.backend;

import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.collabera.chefProject.backend.chef.ChefController;
import com.collabera.chefProject.backend.chef.ChefDto;
import com.collabera.chefProject.backend.concern.ConcernController;
import com.collabera.chefProject.backend.concern.ConcernDto;
import com.collabera.chefProject.backend.user.UserController;
import com.collabera.chefProject.backend.user.UserDto;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MainRestController {
	@Autowired
	private ChefController chefController;
	@Autowired
	private UserController userController;
	@Autowired
	private ConcernController concernController;
	
	@GetMapping("/chefs")
	public ResponseEntity<List<ChefDto>> findAllChefs() {
		return chefController.findAll();
	}
	
	@GetMapping("/chefs/{id}")
	public ResponseEntity<ChefDto> findChef(@PathVariable String id) {
		return chefController.find(id);
	}
	
	@PostMapping("/chefs")
	public ResponseEntity<ChefDto> createChef(@RequestBody @Valid ChefDto new_chef) throws URISyntaxException {
		return chefController.create(new_chef);
	}
	
	@PutMapping("/chefs")
	public ResponseEntity<ChefDto> updateChef(@RequestBody @Valid ChefDto updated_chef) {
		return chefController.update(updated_chef);
	}
	
	@DeleteMapping("/chefs/delete/{id}")
	public ResponseEntity<Void> deleteChef(@PathVariable String id) {
		return chefController.delete(id);
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<UserDto>> findAllUsers() {
		return userController.findAll();
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<UserDto> findUser(@PathVariable String id) {
		return userController.find(id);
	}
	
	@PostMapping("/users")
	public ResponseEntity<UserDto> createUser(@RequestBody @Valid UserDto new_user) throws URISyntaxException {
		return userController.create(new_user);
	}
	
	@PutMapping("/users")
	public ResponseEntity<UserDto> updateUser(@RequestBody @Valid UserDto updated_user) {
		return userController.update(updated_user);
	}
	
	@DeleteMapping("/users/delete/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable String id) {
		return userController.delete(id);
	}
	
	
	@GetMapping("/concerns")
	public ResponseEntity<List<ConcernDto>> findAllConcerns() {
		return concernController.findAll();
	}

	@GetMapping("/concerns/{id}")
	public ResponseEntity<ConcernDto> findConcern(@PathVariable String id) {
		return concernController.find(id);
	}

	@PostMapping("/concerns")
	public ResponseEntity<ConcernDto> createConcern(@RequestBody @Valid ConcernDto new_concern) throws URISyntaxException {
		return concernController.create(new_concern);
	}

	@PutMapping("/concerns")
	public ResponseEntity<ConcernDto> updateConcern(@RequestBody @Valid ConcernDto updated_concern) {
		return concernController.update(updated_concern);
	}

	@DeleteMapping("/concerns/delete/{id}")
	public ResponseEntity<Void> deleteConcern(@PathVariable String id) {
		return concernController.delete(id);
	}
}
