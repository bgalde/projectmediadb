package edu.umuc.cmsc495.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import edu.umuc.cmsc495.model.Music;
import edu.umuc.cmsc495.service.MusicService;


@RestController
public class MusicController {
	
	@Autowired
	MusicService service;
	private Music music;
	
	@GetMapping("/music")
	public List<Music> getMusick(){
		return service.getAllMusics();
	}
	
	@GetMapping("/Music/{id}")
	public Music getMusicById(@PathVariable long id){
		return service.getMusicById(id);
	}
	
	//create new Music
	@PostMapping("/Music")
	public String addMusic(@RequestBody Music music){
		return service.createMusic(music);
	}
	
	@PutMapping("/Music")
	public String updateMusic(@RequestBody Music Music) {
		return service.updateMusic(music);
	}


	

}
