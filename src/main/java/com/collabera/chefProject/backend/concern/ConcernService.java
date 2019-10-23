package com.collabera.chefProject.backend.concern;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConcernService {
	@Autowired
	private ConcernRepository repository;
	
	public List<ConcernDto> findAll() {
		List<ConcernDto> list = new ArrayList<>();
		repository.findAll().forEach(u -> list.add(u.toDto()));
		return list;
	}

	public ConcernDto find(long id) {
		Optional<Concern> p = repository.findById(id);
		return (p.isPresent()) ? p.get().toDto() : null; // add error 
	}

	public ConcernDto save(ConcernDto new_concern) {
		return repository.save(new_concern.toEntity()).toDto();
	}

	public ConcernDto update(ConcernDto concern_change) { // post
		Optional<Concern> concern = repository.findById(concern_change.getId());
		if (concern.isPresent()) {
			return save(concern_change); // whole swap
		}
		throw new IllegalArgumentException();
	}

	public void delete(long id) {
		repository.deleteById(id);
	}

}
