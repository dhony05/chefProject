package com.collabera.chefProject.backend.concern;

public class ConcernDto {
	private long id;
	private String name;
	private String email;
	private String description;
	
	public ConcernDto() {}

	public Concern toEntity() {
		return new Concern(id, name, email, description);
	}

	public ConcernDto(long id, String name, String email, String description) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
