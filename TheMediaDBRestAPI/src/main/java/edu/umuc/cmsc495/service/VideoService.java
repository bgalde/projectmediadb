package edu.umuc.cmsc495.service;

import java.util.List;

import org.springframework.stereotype.Service;

import edu.umuc.cmsc495.model.Video;

@Service
public interface VideoService {

	List<Video> getAllVideos();

	String createVideo(Video video);

	Video getVideoById(long id);

	String updateVideo(Video video);
}
