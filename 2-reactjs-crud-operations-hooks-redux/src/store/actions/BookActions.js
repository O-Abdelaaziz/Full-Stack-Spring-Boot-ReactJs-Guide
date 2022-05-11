import {
    RETRIEVE_BOOKS,
    RETRIEVE_BOOK_BY_ISBN,
    CREATE_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    DELETE_ALL_BOOKS,
} from "./Types";

import BookService from "../../services/BookService";

export const retrieveBooks = () => async (dispatch) => {
    try {
        const response = await BookService.getAllBooks();
        dispatch({type: RETRIEVE_BOOKS, payload: response.data.books});
    } catch (error) {
        return console.log(error);
    }
}

export const retrieveBookByIsbn = (isbn) => async (dispatch) => {
    try {
        const response = await BookService.getBookByIsbn(isbn);
        dispatch({type: RETRIEVE_BOOK_BY_ISBN, payload: response.data});
    } catch (error) {
        return console.log(error);
    }
}

export const createBook = (book) => async (dispatch) => {
    try {
        const response = await BookService.saveBook(book);
        dispatch({type: CREATE_BOOK, payload: response.data});
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const updateBook = (isbn, book) => async (dispatch) => {
    try {
        const response = await BookService.updateBook(isbn, book);
        dispatch({type: UPDATE_BOOK, payload: response.data});
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteBookByIsbn = (isbn) => async (dispatch) => {
    try {
        const response = await BookService.deleteBook(isbn);
        dispatch({type: DELETE_BOOK, payload: response.data});
    } catch (error) {
        return console.log(error);
    }
}

export const deleteBooks = () => async (dispatch) => {
    try {
        const response = await BookService.deleteAllBooks();
        dispatch({type: DELETE_ALL_BOOKS, payload: response.data});
        return Promise.resolve(response.data);

    } catch (error) {
        return Promise.reject(error);
    }
}