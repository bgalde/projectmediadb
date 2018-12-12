package edu.umuc.cmsc495.service;

import java.util.List;
import org.springframework.stereotype.Service;
import edu.umuc.cmsc495.model.Books;

@Service
public interface BooksService {
	
	List<Books> getAllBooks();

	String createBook(Books books);

	Books getBooksById(long id);

	String updateBook(Books books);

}
