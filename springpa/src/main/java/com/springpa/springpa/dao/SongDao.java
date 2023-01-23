package com.springpa.springpa.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springpa.springpa.entities.Song;

public interface SongDao extends JpaRepository<Song,Long> {

}
