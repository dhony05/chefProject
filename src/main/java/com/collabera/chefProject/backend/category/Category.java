package com.collabera.chefProject.backend.category;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.collabera.chefProject.backend.chef.Chef;

@Entity
public class Category {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String name;
	@ManyToOne
	@JoinColumn
	private Chef chef;
	
	
	public Category() {}


	public Category(long id, String name, Chef chef) {
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


	public Chef getChef() {
		return chef;
	}


	public void setChef(Chef chef) {
		this.chef = chef;
	}
	
	public CategoryDto toDto() {
		return new CategoryDto(id, name);
	}

}
