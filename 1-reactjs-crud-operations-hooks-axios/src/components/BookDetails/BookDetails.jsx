import React, {useEffect, useState} from 'react';
import BookService from "../../services/BookService";
import {useNavigate, useParams} from "react-router-dom";

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const { bookIsbn } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(bookIsbn){
            getBookHandler(bookIsbn);
        }
    }, [bookIsbn]);

    const getBookHandler = async (isbn) => {
        await BookService.getBookByIsbn(isbn).then((response) => {
            console.log(response.data);
            setBook(response.data);
        });
    };
    return <React.Fragment>
        <div className="row">
            <div className="col-md-4">
                <img src="https://via.placeholder.com/400x600.png" className="img-fluid img-thumbnail" alt="book details" />
            </div>

            <div className="col-md-8">
                <strong>ISBN</strong>
                <p>{book?.isbn}</p>

                <strong>Title</strong>
                <p>{book?.title}</p>

                <strong>Description</strong>
                <p>{book?.description}</p>

                <strong>Edition</strong>
                <p>{book?.edition}</p>

                <strong>Author</strong>
                <p>{book?.author}</p>

                <strong>Quantity</strong>
                <p>{book?.quantity}</p>

                <strong>Price</strong>
                <p>{book?.price}</p>

                <strong>Rating</strong>
                <p>{book?.rating}</p>

                <strong>Publish Date</strong>
                <p>{book?.publishDate}</p>

                <strong>Tags</strong>
                <p>{book?.tags}</p>
            </div>
        </div>
    </React.Fragment>;
};

export default BookDetails;