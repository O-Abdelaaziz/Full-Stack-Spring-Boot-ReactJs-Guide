import http from "../common/http-common";

const getAllBooks = () => {
    return http.get("/books");
};

const getBookByIsbn = (isbn) => {
    return http.get(`/books/${isbn}`);
};

const saveBook = (book) => {
    return http.post("/books", book);
};

const updateBook = (isbn, book) => {
    return http.put(`/books/${isbn}`, book);
};

const deleteBook = (isbn) => {
    return http.delete(`/books/${isbn}`);
};

const deleteAllBooks = () => {
    http.delete("/books");
};

const BookService = {
    getAllBooks,
    getBookByIsbn,
    saveBook,
    updateBook,
    deleteBook,
    deleteAllBooks,
};

export default BookService;