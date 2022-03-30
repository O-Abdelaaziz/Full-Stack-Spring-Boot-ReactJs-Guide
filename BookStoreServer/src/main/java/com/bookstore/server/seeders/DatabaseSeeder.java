package com.bookstore.server.seeders;

import com.bookstore.server.seeders.database.BooksTableSeeder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder {

    private BooksTableSeeder booksTableSeeder;

    @Autowired
    public DatabaseSeeder(BooksTableSeeder booksTableSeeder) {
        this.booksTableSeeder = booksTableSeeder;
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        booksTableSeeder.seedABookTable();
    }
}
