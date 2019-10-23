package com.collabera.chefProject.backend.category;

import com.collabera.chefProject.backend.chef.Chef;
import com.collabera.chefProject.backend.chef.ChefDto;

public class CategoryDto {
	private long id;
	private String name;
	private ChefDto chef;
	
	
	public CategoryDto() {}


	public CategoryDto(long id, String name, ChefDto chef) {
		super();
		this.id = id;
		this.name = name;
		this.chef = chef;
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


	public ChefDto getChef() {
		return chef;
	}


	public void setChef(ChefDto chef) {
		this.chef = chef;
	}
	
	public Category toEntity() {
		return new Category(id, name, chef.toEntity()); 
	}

	
}
