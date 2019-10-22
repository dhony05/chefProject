package com.collabera.chefProject.backend.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository repository;
	
	
	@Transactional
    public User registerNewUserAccount(UserDto accountDto) 
      throws EmailExistsException {
         
        if (emailExists(accountDto.getEmail())) {   
            throw new EmailExistsException(
              "There is an account with that email address:"  + accountDto.getEmail());
        }
        User user = accountDto.toEntity();    
//        user.setRoles(Arrays.asList("ROLE_USER"));
        return repository.save(user);       
    }
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

	public UserDto save(UserDto new_poke) {
		return repository.save(new_poke.toEntity()).toDto();
	}

	public UserDto update(UserDto poke_change) { // post
		Optional<User> poke = repository.findById(poke_change.getId());
		if (poke.isPresent()) {
			return save(poke_change); // whole swap
		}
		throw new IllegalArgumentException();
	}

	public void delete(long id) {
		repository.deleteById(id);
	}

}
class EmailExistsException extends Exception {
	private static final long serialVersionUID = 1L;

	public EmailExistsException(String message) {
		super(message);
	}
}