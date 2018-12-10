package edu.umuc.cmsc495.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import edu.umuc.cmsc495.model.Games;


@Repository
public interface GamesRepository extends JpaRepository<Games, Long> {
	Games findByGameId(long id);
	
	

}
