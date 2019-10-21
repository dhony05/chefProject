package com.collabera.chefProject.backend.chef;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChefService {
	@Autowired
	private ChefRepository repository;
	
	
	public List<ChefDto> findAll() {
		List<ChefDto> list = new ArrayList<>();
		repository.findAll().forEach(c -> list.add(c.toDto()));
		return list;
	}

	public ChefDto find(long id) {
		Optional<Chef> p = repository.findById(id);
		return (p.isPresent()) ? p.get().toDto() : null; // add error 
	}

	public ChefDto save(ChefDto new_poke) {
		return repository.save(new_poke.toEntity()).toDto();
	}

	public ChefDto update(ChefDto poke_change) { // post
		Optional<Chef> poke = repository.findById(poke_change.getId());
		if (poke.isPresent()) {
			return save(poke_change); // whole swap
		}
		throw new IllegalArgumentException();
	}

	public void delete(long id) {
		repository.deleteById(id);
	}

}
