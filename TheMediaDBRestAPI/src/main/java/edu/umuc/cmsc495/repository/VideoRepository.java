package edu.umuc.cmsc495.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.umuc.cmsc495.model.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
	Video findByVideoId(long id);
}
