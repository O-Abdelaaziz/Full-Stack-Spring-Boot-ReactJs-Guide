package com.bookstore.server.seeders.database;

import com.bookstore.server.entity.Book;
import com.bookstore.server.repositoy.BookRepository;
import com.github.javafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

@Component
public class BooksTableSeeder {

    private BookRepository bookRepository;

    @Autowired
    public BooksTableSeeder(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void seedABookTable() {
        Long articleCount = bookRepository.count();
        Faker fakerData = new Faker();
        if (articleCount == null || articleCount.longValue() <= 0) {
            for (int i = 0; i < 100; i++) {
                Book book = new Book();
                book.setIsbn(fakerData.code().isbn13());
                book.setTitle(fakerData.book().title());
                book.setDescription(fakerData.lorem().paragraph(1));
                book.setEdition(String.valueOf(fakerData.number().numberBetween(1, 9)));
                book.setAuthor(fakerData.book().author());
                book.setQuantity(fakerData.number().numberBetween(1, 100));
                Double price = Double.parseDouble(fakerData.commerce().price().replace(",", "."));
                book.setPrice(price);
                book.setRating(fakerData.number().numberBetween(1, 5));
                book.setPublishDate(fakerData.date().between(parseDate("01-01-2010"), parseDate("01-01-2022")));
                book.setTags(fakerData.lorem().words(5).toString());
                bookRepository.save(book);
            }
        }
    }

    public static Date parseDate(String date) {
        try {
            return new SimpleDateFormat("DD-MM-YYYY").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }
}
