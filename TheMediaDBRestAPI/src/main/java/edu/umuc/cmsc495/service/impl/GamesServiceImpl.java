package edu.umuc.cmsc495.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.umuc.cmsc495.model.Games;
import edu.umuc.cmsc495.repository.GamesRepository;
import edu.umuc.cmsc495.service.GamesService;

@Service
public class GamesServiceImpl implements GamesService{
	
	@Autowired
	GamesRepository dao;

	@Override
	public List<Games> getAllGames() {
		return dao.findAll();
	}

	@Override
	public String createGames(Games games) {
		dao.save(games);
		return "Success.";
	}

	@Override
	public Games getGamesById(long id) {
		return dao.findByGameId(id);
	}

	@Override
	public String updateGames(Games games) {
		
		Games temp = dao.findByGameId(games.getGameId());
		if(temp != null) {
			 dao.save(games);
			 return "Updated.";
		}
		 return "Not updated.";
	}
}



