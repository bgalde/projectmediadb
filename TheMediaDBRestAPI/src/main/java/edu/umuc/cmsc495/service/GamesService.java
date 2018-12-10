package edu.umuc.cmsc495.service;

import java.util.List;
import org.springframework.stereotype.Service;
import edu.umuc.cmsc495.model.Games;

@Service
public interface GamesService {

	List<Games> getAllGames();

	Games getGamesById(long id);

	String updateGames(Games games);

	String createGames(Games games);

}
