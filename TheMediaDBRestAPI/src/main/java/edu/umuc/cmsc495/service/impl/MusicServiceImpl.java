package edu.umuc.cmsc495.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.umuc.cmsc495.model.Music;
import edu.umuc.cmsc495.repository.MusicRepository;
import edu.umuc.cmsc495.service.MusicService;

@Service
public class MusicServiceImpl implements MusicService{
	
	@Autowired
	MusicRepository dao;
	private Music music;

	@Override
	public List<Music> getAllMusics() {
		return dao.findAll();
	}

	@Override
	public String createMusic(Music music) {
		dao.save(music);
		return "Success.";
	}

	@Override
	public Music getMusicById(long id) {
		
		return dao.findByMusicId(id);
	}

	@Override
	public String updateMusic(Music Music) {
		
		Optional<Music> temp = dao.findById(music.getMusicId());
		if(temp != null) {
			 dao.save(Music);
			 return "Updated.";
		}
		 return "Not updated.";
	}

}
