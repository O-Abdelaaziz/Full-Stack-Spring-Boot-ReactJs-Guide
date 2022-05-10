import React from 'react';
import Section from "../UI/Section";
import {useNavigate} from "react-router-dom";

const Books = (props) => {
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate("/new-book", {replace: true});
    };

    return (
        <Section>
            <div className="container px-4 px-lg-5 mt-5">
                <button className="btn btn-primary my-2" onClick={onNavigate}>Add new book</button>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {/*bookList*/}
                </div>
            </div>
        </Section>
    );
};

export default Books;