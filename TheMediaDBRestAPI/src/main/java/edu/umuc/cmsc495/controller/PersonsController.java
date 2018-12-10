package edu.umuc.cmsc495.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import edu.umuc.cmsc495.model.Persons;
import edu.umuc.cmsc495.service.PersonsService;

@RestController
public class PersonsController {
	
	@Autowired
	PersonsService service;
	
	private Persons persons;
	
	
	@GetMapping("/persons")
	public List<Persons> getPersons(){
		return service.getAllPersons();
	}
	
	@GetMapping("/persons/{id}")
	public Persons getPersonsById(@PathVariable int id){
		return service.getPersonById(id);
	}
	
	//create new person
	@PostMapping("/persons")
	public String addPerson(@RequestBody Persons persons){
		return service.createPerson(persons);
	}
	
	@PutMapping("/persons")
	public String updatePersons(@RequestBody Persons person) {
		return service.updatePersons(persons);
	}


}
