package com.collabera.chefProject.backend.chef;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Chef {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@NotBlank(message="Chef Needs First Name")
	private String firstName;
	private String lastName;
	@NotBlank(message="Chef Needs Address")
	private String address;
	
	public Chef() {}

	public Chef(long id, String firstName, String lastName, String address) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
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
	
	public ChefDto toDto() {
		return new ChefDto(id, firstName, lastName, address);
	}
}
