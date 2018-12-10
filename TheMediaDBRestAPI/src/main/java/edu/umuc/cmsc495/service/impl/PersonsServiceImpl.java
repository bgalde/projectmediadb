package edu.umuc.cmsc495.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.umuc.cmsc495.model.Persons;
import edu.umuc.cmsc495.repository.PersonsRepository;
import edu.umuc.cmsc495.service.PersonsService;

@Service
public class PersonsServiceImpl implements PersonsService {

	@Autowired
	private PersonsRepository dao;

	@Override
	public List<Persons> getAllPersons() {
		return dao.findAll();
	}

	@Override
	public String createPerson(Persons persons) {
		dao.save(persons);
		return "Success";
	}

	@Override
	public Persons getPersonById(int id) {
		return dao.findByPersonId(id);
	}

	@Override
	public String updatePersons(Persons persons) {
		Optional<Persons> temp = dao.findById(persons.getPersonId());
		if (temp != null) {
			dao.save(persons);
			return "Updated.";
		}

		return "Not updated.";
	}

}
