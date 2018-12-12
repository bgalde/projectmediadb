package edu.umuc.cmsc495.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import edu.umuc.cmsc495.model.Books;

@Repository
public interface BooksRepository extends JpaRepository<Books, Long> {
	Books findByBookId(long id);
}
