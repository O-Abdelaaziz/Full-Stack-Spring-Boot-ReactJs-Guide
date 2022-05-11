import {
    RETRIEVE_BOOKS,
    RETRIEVE_BOOK_BY_ISBN,
    CREATE_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    DELETE_ALL_BOOKS,
} from "../actions/Types";

const initialState = {
    books: [],
    book: {}
};

const bookReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case RETRIEVE_BOOKS:
            return {...state, books: payload};
        case RETRIEVE_BOOK_BY_ISBN:
            return {...state, book: payload};
        case CREATE_BOOK:
            return {...state, payload};
        case UPDATE_BOOK:
            return {
                ...state, books: state.books.map((book) => {
                    if (book.id === payload.id) {
                        return {
                            ...book,
                            ...payload
                        };
                    } else {
                        return book;
                    }
                })
            };
        case DELETE_BOOK:
            return {...state, state: state.books.filter(({isbn}) => isbn !== payload.isbn)};
        case DELETE_ALL_BOOKS:
            return {...state, books: []};
        default:
            return state;
    }
}

export default bookReducer;

