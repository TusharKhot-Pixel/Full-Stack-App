package com.springpa.springpa.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springpa.springpa.dao.SongDao;
import com.springpa.springpa.entities.Song;

@Service
public class SongServiceImpl implements SongService{
	
	@Autowired
	private SongDao songDao;
	
	List<Song> list;
	
	public SongServiceImpl() {
//		list=new ArrayList<>();
//		list.add(new Song(1,"David Guetta","Titanium"));
//		list.add(new Song(2,"Sean Paul","Temperature"));
//		list.add(new Song(3,"Capo Plaza","Allenamento"));
//		list.add(new Song(4,"Bad bunny","Tu no metes cabra"));
	}

	@Override
	public List<Song> getSongs() {
		return songDao.findAll();
	}

	@Override
	public Song getSong(long songId) {
//		Song s=null;
//		for(Song song:list) {
//			if(song.getId()==songId) {
//				s=song;
//			}
//		}
		
		return songDao.getOne(songId);
	}

	@Override
	public Song addSong(Song song) {
//		list.add(song);
		return songDao.save(song);
	}

	@Override
	public Song updateSong(Song song) {
		return songDao.save(song);
	}

	@Override
	public void deleteSong(long songId) {
		Song entity=songDao.getOne(songId);
		songDao.delete(entity);
	}
	
}
