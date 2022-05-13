import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {retrieveBookByIsbn} from "../../store/actions/BookActions";

const BookDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const book = useSelector(state => state.books.book);
    const {bookIsbn} = useParams();

    useEffect(() => {
        dispatch(retrieveBookByIsbn(bookIsbn));
    }, [dispatch, bookIsbn]);

    const goBack = () => {
        navigate(-1);
    };

    return <React.Fragment>
        <div className="row">
            <div className="col-md-4">
                <img src="https://via.placeholder.com/400x600.png" className="img-fluid img-thumbnail"
                     alt="book details"/>
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
                <button className={'btn btn-danger my-2'} onClick={goBack}>Go Back</button>
            </div>
        </div>
    </React.Fragment>;
};

export default BookDetails;