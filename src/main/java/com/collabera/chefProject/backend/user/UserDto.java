package com.collabera.chefProject.backend.user;

import com.collabera.chefProject.backend.config.PasswordMatches;
import com.collabera.chefProject.backend.config.ValidEmail;

@PasswordMatches
public class UserDto {
	private long id;
	private String firstName;
	private String lastName;
	private String address;
	@ValidEmail
	private String email;
	private String password;
	private String matchingPassword;
	
	public UserDto() {}

	public UserDto(long id, String firstName, String lastName, String address, String email, String password) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.email = email;
		this.password = password;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public User toEntity() {
		return new User(id, firstName, lastName, address, email, password);
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMatchingPassword() {
		return matchingPassword;
	}

	public void setMatchingPassword(String matchingPassword) {
		this.matchingPassword = matchingPassword;
	}
}