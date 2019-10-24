package com.collabera.chefProject.backend.user;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
public class UserController {
	@Autowired
	private UserService service;
	public ResponseEntity<List<UserDto>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
	public ResponseEntity<UserDto> find(String id) {
		return ResponseEntity.ok(service.find(Long.valueOf(id)));
	}
	public ResponseEntity<UserDto> create(UserDto new_user) throws URISyntaxException, EmailExistsException {
		UserDto result = service.save(new_user);
		return ResponseEntity.created(new URI("/api/users/" + result.getId())).body(result);
	}
	public ResponseEntity<UserDto> update(UserDto updated_user) throws EmailExistsException {
		UserDto result = service.update(updated_user);
		return ResponseEntity.ok().body(result);
	}
	public ResponseEntity<Void> delete(String id) {
		service.delete(Long.valueOf(id));
		return ResponseEntity.ok().build();
	}
	public ResponseEntity<Void> canLogin(UserDto user) throws Exception {
		service.canLogin(user);
		return ResponseEntity.ok().build();
	}
}
