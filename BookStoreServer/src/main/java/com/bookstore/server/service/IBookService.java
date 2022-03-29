package com.bookstore.server.service;

import com.bookstore.server.entity.Book;
import org.springframework.data.domain.Page;

import java.util.Map;

public interface IBookService {
    public Map<String, Object> findBooks(int page, int size);

    public Book findBookByIsbn(String isbn);

    public Book saveBook(Book book);

    public Book updateBook(String isbn, Book book);

    public void deleteBook(String isbn);

    public void deleteBooks();
}
