import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {retrieveBookByIsbn, updateBook} from "../../../store/actions/BookActions";
import {useDispatch, useSelector} from "react-redux";
import BookForm from "../BookForm/BookForm";

const EditBook = () => {
    const dispatch = useDispatch();
    const {bookIsbn} = useParams();
    // const book = useSelector(state => state.books.books.find(book => book.isbn === bookIsbn));
    const book = useSelector(state => state.books.book);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(retrieveBookByIsbn(bookIsbn));
    }, []);

    const onUpdateBook = (book) => {

        const updatedBook = {
            title: book.titleEnteredValue,
            isbn: book.isbnEnteredValue,
            author: book.authorEnteredValue,
            edition: book.editionEnteredValue,
            price: book.priceEnteredValue,
            quantity: book.quantityEnteredValue,
            rating: book.ratingEnteredValue,
            publishDate: book.publishDateEnteredValue,
            tags: book.tagsEnteredValue,
            description: book.descriptionEnteredValue,
        }

        toast.promise(
            dispatch(updateBook(bookIsbn, updatedBook)),
            {
                pending: "Loading...",
                success: "New book has been saved successfully.",
                error: (err) => err.response.data.msg,
            }
        );
    }

    const onGoBack = () => {
        navigate(-1);
    };

    return (
        <React.Fragment>
            <BookForm onSaveBook={onUpdateBook} book={book} onCancel={onGoBack}></BookForm>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </React.Fragment>
    );
};
export default EditBook;