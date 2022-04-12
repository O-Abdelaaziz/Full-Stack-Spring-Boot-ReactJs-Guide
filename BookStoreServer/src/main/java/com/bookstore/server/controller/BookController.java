package com.bookstore.server.controller;

import com.bookstore.server.entity.Book;
import com.bookstore.server.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Map;

@RestController
@RequestMapping(path = "/books")
public class BookController {

    private IBookService iBookService;

    @Autowired
    public BookController(IBookService iBookService) {
        this.iBookService = iBookService;
    }

    @GetMapping()
    public ResponseEntity<Map<String, Object>> getAllBooks(@RequestParam(defaultValue = "0") int page,
                                                           @RequestParam(defaultValue = "15") int size) {
        return ResponseEntity.ok(iBookService.findBooks(page, size));

    }

    @GetMapping("/{isbn}")
    public ResponseEntity<Book> getBookByIsbn(@PathVariable(name = "isbn") String isbn) {
        return ResponseEntity.ok(iBookService.findBookByIsbn(isbn));
    }

    @PostMapping()
    public ResponseEntity<Book> saveBook(@Valid @RequestBody Book book) {
        Book saveBook = iBookService.saveBook(book);
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/books/" + saveBook.getIsbn()).toUriString());
        return ResponseEntity.created(uri).body(saveBook);
    }

    @PutMapping("/{isbn}")
    public ResponseEntity<Book> updateBook(@PathVariable(name = "isbn") String isbn, @Valid @RequestBody Book book) {
        Book updateBook = iBookService.updateBook(isbn, book);
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/books/" + updateBook.getIsbn()).toUriString());
        return ResponseEntity.created(uri).body(updateBook);
    }

    @DeleteMapping("/{isbn}")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable("isbn") String isbn) {
        try {
            iBookService.deleteBook(isbn);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping()
    public ResponseEntity<HttpStatus> deleteAllBooks() {
        try {
            iBookService.deleteBooks();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
