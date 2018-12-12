package edu.umuc.cmsc495.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import edu.umuc.cmsc495.model.Games;
import edu.umuc.cmsc495.service.GamesService;

@RestController
public class GamesController {
	
	@Autowired
	GamesService service;
	private Games games;
	
	@GetMapping("/games")
	public List<Games> getGames(){
		return service.getAllGames();
	}
	
	@GetMapping("/games/{id}")
	public Games getGameById(@PathVariable long id){
		return service.getGamesById(id);
	}
	
	//create new game
	@PostMapping("/game")
	public String addGame(@RequestBody Games game){
		return service.createGames(game);
	}
	
	@PutMapping("/Games")
	public String updateGames(@RequestBody Games game) {
		return service.updateGames(games);
	}


}
