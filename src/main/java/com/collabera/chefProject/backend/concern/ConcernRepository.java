package com.collabera.chefProject.backend.concern;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConcernRepository extends CrudRepository<Concern, Long> {
	Optional<Concern> findByEmail(String email);
}
