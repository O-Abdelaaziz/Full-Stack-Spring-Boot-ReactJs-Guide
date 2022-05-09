import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import BookService from "../../services/BookService";
import {toast, ToastContainer} from "react-toastify";
import BookForm from "./BookForm";

const EditBook = () => {
    const {bookIsbn} = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        if (bookIsbn) {
            getBookHandler(bookIsbn);
        }
    }, [bookIsbn]);

    const getBookHandler = async (isbn) => {
        await BookService.getBookByIsbn(isbn).then((response) => {
            setBook(response.data);
        });
    };
    const navigate = useNavigate();

    const onUpdateBookNotify = (book) => {
        const savedBook = {
            title: book.titleEnteredValue,
            isbn: book.isbnInputEnteredValue,
            author: book.authorEnteredValue,
            edition: book.editionEnteredValue,
            price: book.priceEnteredValue,
            quantity: book.quantityEnteredValue,
            rating: book.ratingEnteredValue,
            publishDate: book.publishDateEnteredValue,
            description: book.descriptionEnteredValue,
        };

        toast.promise(
            BookService.updateBook(bookIsbn,savedBook)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log("Error "+error );
                })
                ,
            {
                pending: "Loading...",
                success: "book has been updated successfully.",
                error: (err) => err.response.data.msg,
            }
        );
    }

    const onGoBack = () => {
        navigate(-1);
    };

    return (
        <React.Fragment>
            <BookForm OnUpdateBook={onUpdateBookNotify} book={book} onCancel={onGoBack}></BookForm>
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