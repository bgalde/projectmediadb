package edu.umuc.cmsc495.service.impl;

import java.awt.print.Book;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import edu.umuc.cmsc495.model.Books;
import edu.umuc.cmsc495.repository.BooksRepository;
import edu.umuc.cmsc495.service.BooksService;

@Service
public class BooksServiceImpl implements BooksService{
	
	@Autowired
	BooksRepository dao;

	@Override
	public List<Books> getAllBooks() {
		return dao.findAll();
	}

	@Override
	public String createBook(Books books) {
		dao.save(books);
		return "Success.";
	}

	@Override
	public Books getBooksById(long id) {
		
		return dao.findByBookId(id);
	}

	@Override
	public String updateBook(Books books) {
		
		Optional<Books> temp = dao.findById(books.getBookId());
		if(temp != null) {
			 dao.save(books);
			 return "Updated.";
		}
		 return "Not updated.";
	}

}
