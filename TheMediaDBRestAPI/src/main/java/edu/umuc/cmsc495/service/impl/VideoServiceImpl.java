package edu.umuc.cmsc495.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.umuc.cmsc495.model.Video;
import edu.umuc.cmsc495.repository.VideoRepository;
import edu.umuc.cmsc495.service.VideoService;

@Service
public class VideoServiceImpl implements VideoService{
	
	@Autowired
	VideoRepository dao;

	@Override
	public List<Video> getAllVideos() {
		return dao.findAll();
	}

	@Override
	public String createVideo(Video video) {
		dao.save(video);
		return "Success.";
	}

	@Override
	public Video getVideoById(long id) {
		// TODO Auto-generated method stub
		return dao.findByVideoId(id);
	}

	@Override
	public String updateVideo(Video video) {
		// TODO Auto-generated method stub
		Optional<Video> temp = dao.findById(video.getVideoId());
		if(temp != null) {
			 dao.save(video);
			 return "Updated.";
		}
		 return "Not pdated.";
	}
}
