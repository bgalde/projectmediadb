package edu.umuc.cmsc495.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@NamedQuery(name = "Books.findAll", query = "SELECT b FROM Books b")
public class Books implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Long bookId;
	
	private Long authorId;
	
	private String title;
	
	@Temporal(TemporalType.DATE)
	private Date year;
	
	private Integer pages;
	
	private String publisher;

	private String format;

	public Long getBookId() {
		return bookId;
	}

	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}

	public Long getAuthorId() {
		return authorId;
	}

	public void setAuthorId(Long authorID) {
		this.authorId = authorID;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getYear() {
		return year;
	}

	public void setYear(Date year) {
		this.year = year;
	}

	public Integer getPages() {
		return pages;
	}

	public void setPages(Integer pages) {
		this.pages = pages;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getFormat() {
		return format;
	}

	public void setFormat(String format) {
		this.format = format;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}

	

	
	
