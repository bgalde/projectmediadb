package edu.umuc.cmsc495.controller;

import java.awt.print.Book;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.umuc.cmsc495.model.Books;
import edu.umuc.cmsc495.service.BooksService;



@RestController
public class BooksController {
	@Autowired
	BooksService service;
	
	@GetMapping("/books")
	public List<Books> getBook(){
		return service.getAllBooks();
	}
	
	@GetMapping("/books/{id}")
	public Books getBookById(@PathVariable long id){
		return service.getBooksById(id);
	}
	
	//create new book
	@PostMapping("/books")
	public String addBook(@RequestBody Books book){
		return service.createBook(book);
	}
	
	@PutMapping("/books")
	public String updateBook(@RequestBody Books book) {
		return service.updateBook(book);
	}


}
