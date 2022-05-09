import React from 'react';
import {Link} from "react-router-dom";
import BookService from "../../services/BookService";

const Card = (props) => {

    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* Product image*/}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                {/* Product details*/}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">{props.title}</h5>
                        {/* Product price*/}
                        {props.price}
                    </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link className='btn btn-outline-info mx-2' to={`/books/${props.isbn}`}><i
                            className={'bi bi-eye-fill'}></i></Link>
                        <Link className='btn btn-outline-success' to={`/books/${props.isbn}/edit`}><i
                            className={'bi bi-pencil-fill'}></i></Link>
                        <button className='btn btn-outline-danger mx-2' onClick={props.onDelete}><i
                            className={'bi bi-trash-fill'}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;