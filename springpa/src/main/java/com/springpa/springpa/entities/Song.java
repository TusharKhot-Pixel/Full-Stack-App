package com.springpa.springpa.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Song {
	
	@Id
	private long id;
	private String title;
	private String description;
	public Song(long id, String title, String description) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
	}
	public Song() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Song [id=" + id + ", title=" + title + ", description=" + description + "]";
	}
	
	
}
