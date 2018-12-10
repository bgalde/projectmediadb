package edu.umuc.cmsc495.service;


import java.util.List;

import org.springframework.stereotype.Service;

import edu.umuc.cmsc495.model.Persons;



@Service
public interface PersonsService {
	
	List<Persons> getAllPersons();

	String createPerson(Persons persons);

	Persons getPersonById(int id);
	
	String updatePersons(Persons persons);

	

	
	

}
