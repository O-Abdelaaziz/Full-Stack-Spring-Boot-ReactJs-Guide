package com.bookstore.server.repositoy;

import com.bookstore.server.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Book findByIsbn(String isbn);

    Page<Book> findByTitle(String title, Pageable pageable);

    Page<Book> findByPublishDate(Date publishDate, Pageable pageable);

    Page<Book> findByAuthor(String author, Pageable pageable);
}
