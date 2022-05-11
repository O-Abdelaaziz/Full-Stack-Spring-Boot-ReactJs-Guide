import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteBooks, retrieveBooks} from "../../store/actions/BookActions";
import BookItem from "./BookItem";
import {toast, ToastContainer} from "react-toastify";
import Section from "../UI/Section";

const BooksList = () => {
    const books = useSelector(state => state.books.books);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(retrieveBooks());
    }, []);

    const dataTable = () => {
        return books.map((res, i) => {
            return <BookItem book={res} key={i}/>
        })
    }

    const removeAllBooks = () => {
        dispatch(deleteBooks())
            .then(response => {
                toast("All Books Was Deleted");
                dispatch(retrieveBooks());
            })
            .catch(e => {
                console.log(e);
            });
    };

    const onNavigate = () => {
        navigate("/new-book", {replace: true});
    };

    return (
        <Section>
            <div className="container px-4 px-lg-5 mt-5">
                <button className="btn btn-primary my-2" onClick={onNavigate}>Add new book</button>
                <button className="btn btn-danger mx-2"  onClick={removeAllBooks}>Remove All</button>

                <div className="row col-md-12 justify-content-center">
                    <div className={'table-wrapper'}>
                        <table className={'table table-striped table-bordered table-responsive table-hover'}>
                            <thead className={'thead-dark'}>
                            <tr>
                                <th>ID</th>
                                <th>ISBN</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Edition</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>{dataTable()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Section>
    );
};

export default BooksList;