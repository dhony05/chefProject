package com.collabera.chefProject.backend.concern;

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
public class ConcernController {
	@Autowired
	private ConcernService service;
	public ResponseEntity<List<ConcernDto>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
	public ResponseEntity<ConcernDto> find(@PathVariable String id) {
		return ResponseEntity.ok(service.find(Long.valueOf(id)));
	}
	public ResponseEntity<ConcernDto> create(@RequestBody @Valid ConcernDto new_move) throws URISyntaxException {
		ConcernDto result = service.save(new_move);
		return ResponseEntity.created(new URI("/api/chefs/" + result.getId())).body(result);
	}
	public ResponseEntity<ConcernDto> update(@RequestBody @Valid ConcernDto updated_move) {
		ConcernDto result = service.update(updated_move);
		return ResponseEntity.ok().body(result);
	}
	public ResponseEntity<Void> delete(@PathVariable String id) {
		service.delete(Long.valueOf(id));
		return ResponseEntity.ok().build();
	}
}
