import React from 'react';
import BookForm from "../BookForm/BookForm";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import {createBook} from "../../../store/actions/BookActions";

const NewBook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveBook = (book) => {
        const savedBook = {
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
            dispatch(createBook(savedBook)),
            {
                pending: "Loading...",
                success: "New book has been saved successfully.",
                error: (err) => err.response.data.msg,
            }
        );
        navigate('/books');
    }

    const onGoBack = () => {
        navigate(-1);
    };

    return (
        <React.Fragment>
            <BookForm onSaveBook={saveBook} onCancel={onGoBack}></BookForm>
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

export default NewBook;