import React from 'react';
import BookForm from "./BookForm";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewBook = () => {
    const navigate = useNavigate();

    const onGoBack = () => {
        navigate(-1);
    };

    return (
        <React.Fragment>
            <BookForm onCancel={onGoBack}></BookForm>
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