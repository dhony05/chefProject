package com.collabera.chefProject.backend.chef;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
public class ChefController {
	@Autowired
	private ChefService service;
	public ResponseEntity<List<ChefDto>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
	public ResponseEntity<ChefDto> find(@PathVariable String id) {
		return ResponseEntity.ok(service.find(Long.valueOf(id)));
	}
	public ResponseEntity<ChefDto> create(@RequestBody @Valid ChefDto new_move) throws URISyntaxException {
		ChefDto result = service.save(new_move);
		return ResponseEntity.created(new URI("/api/chefs/" + result.getId())).body(result);
	}
	public ResponseEntity<ChefDto> update(@RequestBody @Valid ChefDto updated_move) {
		ChefDto result = service.update(updated_move);
		return ResponseEntity.ok().body(result);
	}
	public ResponseEntity<Void> delete(@PathVariable String id) {
		service.delete(Long.valueOf(id));
		return ResponseEntity.ok().build();
	}
}
