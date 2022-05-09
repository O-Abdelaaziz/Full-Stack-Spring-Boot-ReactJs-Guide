import React from 'react';
import BookService from "../../services/BookService";
import BookForm from "./BookForm";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewBook = () => {
    const navigate = useNavigate();

    // const saveBookHandler = (book) => {
    //   console.log(book);
    // };

    const OnSaveBookNotify = (book) => {
        const savedBook = {
            title: book.titleEnteredValue,
            isbn: book.isbnInputEnteredValue,
            author: book.authorEnteredValue,
            edition: book.editionEnteredValue,
            price: book.priceEnteredValue,
            quantity: book.quantityEnteredValue,
            rating: book.ratingEnteredValue,
            publishDate: book.publishDateEnteredValue,
            tags: book.tagsEnteredValue,
            description: book.descriptionEnteredValue,
        };

        toast.promise(
            BookService.saveBook(savedBook)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                }),
            {
                pending: "Loading...",
                success: "New book has been saved successfully.",
                error: (err) => err.response.data.msg,
            }
        );
    };

    const onGoBack = () => {
        navigate(-1);
    };
    return (
        <React.Fragment>
            <BookForm OnSaveBook={OnSaveBookNotify} onCancel={onGoBack}></BookForm>
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