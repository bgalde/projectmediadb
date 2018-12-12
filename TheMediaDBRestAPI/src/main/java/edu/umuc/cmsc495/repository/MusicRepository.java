package edu.umuc.cmsc495.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.umuc.cmsc495.model.Music;

@Repository
public interface MusicRepository extends JpaRepository<Music, Long> {
	
	Music findByMusicId(long id);

	}


