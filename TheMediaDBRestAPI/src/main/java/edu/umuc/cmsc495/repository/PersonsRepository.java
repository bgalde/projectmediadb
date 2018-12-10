package edu.umuc.cmsc495.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.umuc.cmsc495.model.Persons;

@Repository
public interface PersonsRepository extends JpaRepository<Persons, Integer> {
	Persons findByPersonId(Integer id);

}
