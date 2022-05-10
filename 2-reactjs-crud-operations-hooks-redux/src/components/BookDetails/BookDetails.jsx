import React from 'react';
import {useNavigate} from "react-router-dom";

const BookDetails = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return <React.Fragment>
    </React.Fragment>;
};

export default BookDetails;