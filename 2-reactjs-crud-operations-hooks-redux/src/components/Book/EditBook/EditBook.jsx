import React from 'react';
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import BookForm from "./BookForm";

const EditBook = () => {
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

export default EditBook;