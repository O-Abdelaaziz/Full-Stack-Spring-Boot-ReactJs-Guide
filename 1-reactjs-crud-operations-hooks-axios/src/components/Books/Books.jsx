import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import BookService from "../../services/BookService";
import Section from "../UI/Section";
import Card from "../UI/Card";

const Books = () => {
    const [bookList, setBookList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        retrieveBooks();
    }, []);

    const retrieveBooks = async () => {
        await BookService.getAllBooks()
            .then((response) => {
                console.log(response);
                setBookList(response.data.books);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onNavigate = () => {
        navigate("/new-book", { replace: true });
    };

    const viewDetailsHandler=(isbn)=>{
        navigate('/books/'+isbn,{replace:true});
    }

    return (
        <Section>
            <div className="container px-4 px-lg-5 mt-5">
                <button className="btn btn-primary my-2" onClick={onNavigate}>Add new book</button>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {bookList.map((book) => (
                        <Card key={book.id} title={book.title} price={book.price} isbn={book.isbn} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Books;