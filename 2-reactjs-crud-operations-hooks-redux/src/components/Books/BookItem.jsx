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
                <Link className="btn btn-info" to={"/books/" + isbn }><i className="bi bi-eye-fill"></i></Link>
                <Link className="btn btn-success" to={"/books/" + isbn + "/edit"}><i className="bi bi-pencil-fill"></i></Link>
                <button className={'btn btn-danger'} onClick={removeBook}><i className="bi bi-trash-fill"></i></button>
            </td>
        </tr>
    );
};

export default BookItem;