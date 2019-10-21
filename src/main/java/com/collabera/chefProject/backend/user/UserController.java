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
	public ResponseEntity<UserDto> find(@PathVariable String id) {
		return ResponseEntity.ok(service.find(Long.valueOf(id)));
	}
	public ResponseEntity<UserDto> create(@RequestBody @Valid UserDto new_move) throws URISyntaxException {
		UserDto result = service.save(new_move);
		return ResponseEntity.created(new URI("/api/chefs/" + result.getId())).body(result);
	}
	public ResponseEntity<UserDto> update(@RequestBody @Valid UserDto updated_move) {
		UserDto result = service.update(updated_move);
		return ResponseEntity.ok().body(result);
	}
	public ResponseEntity<Void> delete(@PathVariable String id) {
		service.delete(Long.valueOf(id));
		return ResponseEntity.ok().build();
	}
}
