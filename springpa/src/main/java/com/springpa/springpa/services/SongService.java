package com.springpa.springpa.services;

import java.util.List;

import com.springpa.springpa.entities.Song;

public interface SongService {
	public List<Song> getSongs();

	public Song getSong(long songId);

	public Song addSong(Song song);

	public Song updateSong(Song song);

	public void deleteSong(long songId);
}
