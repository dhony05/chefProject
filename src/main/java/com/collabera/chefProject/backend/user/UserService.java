package com.collabera.chefProject.backend.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository repository;
	@Autowired
	private PasswordEncoder encoder;
	
	private boolean emailExists(String email) {
        return repository.findByEmail(email).isPresent();   
    }
	
	public List<UserDto> findAll() {
		List<UserDto> list = new ArrayList<>();
		repository.findAll().forEach(u -> list.add(u.toDto()));
		return list;
	}

	public UserDto find(long id) {
		Optional<User> p = repository.findById(id);
		return (p.isPresent()) ? p.get().toDto() : null; // add error 
	}
	@Transactional
	public UserDto save(UserDto new_user) throws EmailExistsException {
		if (emailExists(new_user.getEmail())) {   
            throw new EmailExistsException(
              "There is an account with that email address:"  + new_user.getEmail());
        }
		new_user.setPassword(encoder.encode(new_user.getPassword()));
		return repository.save(new_user.toEntity()).toDto();
	}

	public UserDto update(UserDto user_change) throws EmailExistsException { // post
		Optional<User> poke = repository.findById(user_change.getId());
		if (poke.isPresent()) {
			return save(user_change); // whole swap
		}
		throw new IllegalArgumentException();
	}

	public void delete(long id) {
		repository.deleteById(id);
	}
	public void canLogin(UserDto user) throws Exception {
		Optional<User> account = repository.findByEmail(user.getEmail());
		if (!account.isPresent()) {
			throw new Exception("Account Not Present");
		}
		if (!encoder.matches(user.getPassword(), account.get().getPassword())) {
			throw new Exception("Mismatched Password");
		}
	}

}