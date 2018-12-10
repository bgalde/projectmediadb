package edu.umuc.cmsc495.service;

import java.util.List;

import org.springframework.stereotype.Service;
import edu.umuc.cmsc495.model.Music;

@Service
public interface MusicService {
	
	String createMusic(Music music);

	Music getMusicById(long id);

	String updateMusic(Music music);

	List<Music> getAllMusics();

	
}


