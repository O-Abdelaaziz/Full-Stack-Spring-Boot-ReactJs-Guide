import React from 'react';
import {deleteBookByIsbn, retrieveBooks} from "../../store/actions/BookActions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const BookItem = (props) => {
    const {id, isbn, title, description, edition} = props.book;
    const dispatch = useDispatch();

    const removeBook = () => {
        dispatch(deleteBookByIsbn(isbn))
            .then(() => {
                dispatch(retrieveBooks());
            })
            .catch(e => {
                console.log(e);
            });
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{isbn}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{edition}</td>
            <td>
                <Link className="btn btn-success" to={"/books/" + isbn + "/edit"}>Edit</Link>
                <button className={'btn btn-danger'} onClick={removeBook}>Remove</button>
            </td>
        </tr>
    );
};

export default BookItem;