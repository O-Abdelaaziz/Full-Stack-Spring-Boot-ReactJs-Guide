package com.bookstore.server.service.impl;

import com.bookstore.server.entity.Book;
import com.bookstore.server.exception.ResourceAlreadyExistsException;
import com.bookstore.server.exception.ResourceNotFoundException;
import com.bookstore.server.repositoy.BookRepository;
import com.bookstore.server.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class BookServiceImpl implements IBookService {

    private BookRepository bookRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Map<String, Object> findBooks(int page, int size) {
        if (page > 0) page -= 1;
        List<Book> booksList = new ArrayList<Book>();
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, "id"));
        Page<Book> categoryPage = bookRepository.findAll(pageable);
        booksList = categoryPage.getContent();

        Map<String, Object> categoryHashMap = new HashMap<>();
        categoryHashMap.put("books", booksList);
        categoryHashMap.put("currentPage", categoryPage.getNumber());
        categoryHashMap.put("totalItems", categoryPage.getTotalElements());
        categoryHashMap.put("totalPages", categoryPage.getTotalPages());

        return categoryHashMap;
    }

    @Override
    public Book findBookByIsbn(String isbn) {
        Book getBook = bookRepository.findByIsbn(isbn);
        if (getBook == null) {
            throw new ResourceNotFoundException("Book not fond with provided id: " + isbn);
        }
        return getBook;
    }

    @Override
    public Book saveBook(Book book) {
        Book getBook = bookRepository.findByIsbn(book.getIsbn());
        if (getBook != null) {
            throw new ResourceAlreadyExistsException("Book already exists");
        }
        Book savedBook = bookRepository.save(book);
        return savedBook;
    }

    @Override
    public Book updateBook(String isbn, Book book) {
        Book getBook = findBookByIsbn(isbn);
        getBook.setIsbn(book.getIsbn());
        getBook.setTitle(book.getTitle());
        getBook.setDescription(book.getDescription());
        getBook.setEdition(book.getEdition());
        getBook.setAuthor(book.getAuthor());
        getBook.setQuantity(book.getQuantity());
        getBook.setPrice(book.getPrice());
        getBook.setRating(book.getRating());
        getBook.setPublishDate(book.getPublishDate());

        Book updatedBook = bookRepository.save(getBook);
        return updatedBook;
    }

    @Override
    public void deleteBook(String isbn) {
        Book getBook = findBookByIsbn(isbn);
        bookRepository.delete(getBook);
    }

    @Override
    public void deleteBooks() {
        bookRepository.deleteAll();
    }
}
