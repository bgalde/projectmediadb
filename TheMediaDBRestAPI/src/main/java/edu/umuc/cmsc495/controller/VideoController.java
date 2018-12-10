package edu.umuc.cmsc495.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import edu.umuc.cmsc495.model.Video;
import edu.umuc.cmsc495.service.VideoService;

@RestController
public class VideoController {
	
	@Autowired
	VideoService service;
	
	@GetMapping("/videos")
	public List<Video> getVideos(){
		return service.getAllVideos();
	}
	
	@GetMapping("/videos/{id}")
	public Video getVideoById(@PathVariable long id){
		return service.getVideoById(id);
	}
	
	//create new video
	@PostMapping("/videos")
	public String addVideo(@RequestBody Video video){
		return service.createVideo(video);
	}
	
	@PutMapping("/videos")
	public String updateVideo(@RequestBody Video video) {
		return service.updateVideo(video);
	}

}
