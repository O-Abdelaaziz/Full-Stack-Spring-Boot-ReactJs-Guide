package com.bookstore.server.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "books")
public class Book implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "isbn can not be empty value")
    @Column(name = "isbn")
    private String isbn;

    @NotEmpty(message = "title can not be empty value")
    @Column(name = "title")
    private String title;

    @NotEmpty(message = "description can not be empty value")
    @Column(name = "description")
    private String description;

    @NotEmpty(message = "edition can not be empty value")
    @Column(name = "edition")
    private String edition;

    @NotEmpty(message = "author can not be empty value")
    @Column(name = "author")
    private String author;

    @NotEmpty(message = "quantity can not be empty value")
    @Column(name = "quantity")
    private Integer quantity;

    @NotEmpty(message = "price can not be empty value")
    @Column(name = "price")
    private Double price;

    @NotEmpty(message = "rating can not be empty value")
    @Column(name = "rating")
    private Integer rating;

    @NotEmpty(message = "publishDate can not be empty value")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "DD-MM-YYYY")
    private Date publishDate;

    @ElementCollection
    private List<String> tags = new ArrayList<>();
}
