package com.springpa.springpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springpa.springpa.entities.Song;
import com.springpa.springpa.services.SongService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MyController {
	
	@Autowired
	private SongService songService;
	
	@GetMapping("/songs")
	public List<Song> getSongs(){
		return this.songService.getSongs();
	}
	
	@GetMapping("/songs/{songId}")
	public Song getSong(@PathVariable String songId) {
		return this.songService.getSong(Long.parseLong(songId));
	}
	
	@PostMapping("/songs")
	public Song addSong(@RequestBody Song song) {
		return this.songService.addSong(song);
	}
	
	@PutMapping("/songs")
	public Song updateSong(Song song) {
		return this.songService.updateSong(song);
	}
	
	@DeleteMapping("/songs/{songId}")
	public void deleteSong(@PathVariable String songId) {
		this.songService.deleteSong(Long.parseLong(songId));
	}
}
