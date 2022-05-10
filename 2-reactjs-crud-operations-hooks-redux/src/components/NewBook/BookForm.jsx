import React from 'react';

const BookForm = (props) => {

    const fromSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <form onSubmit={fromSubmitHandler}>
                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <div className="from-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                className="form-control"
                                placeholder="title..."
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <div className="from-group">
                            <label htmlFor="isbn">ISBN:</label>
                            <input
                                type="text"
                                id="isbn"
                                className="form-control"
                                placeholder="isbn..."
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="from-group">
                                    <label htmlFor="author">Author:</label>
                                    <input
                                        type="text"
                                        id="author"
                                        className="form-control"
                                        placeholder="author..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="from-group">
                                    <label htmlFor="edition">Edition:</label>
                                    <input
                                        type="number"
                                        id="edition"
                                        className="form-control"
                                        placeholder="edition..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="from-group">
                                    <label htmlFor="price">Price:</label>
                                    <input
                                        type="text"
                                        id="price"
                                        className="form-control"
                                        placeholder="price..."
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="from-group">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="form-control"
                                        placeholder="quantity..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="from-group">
                                    <label htmlFor="rating">Rating:</label>
                                    <input
                                        type="number"
                                        id="rating"
                                        className="form-control"
                                        placeholder="rating..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="from-group">
                                    <label htmlFor="publishDate">Publish date:</label>
                                    <input
                                        type="date"
                                        id="publishDate"
                                        className="form-control"
                                        placeholder="publish date..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <div className="from-group">
                            <label htmlFor="tags">Tags:</label>
                            <input
                                type="text"
                                id="tags"
                                required
                                className="form-control"
                                placeholder="tags..."
                            />

                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <div className="from-group">
                            <label htmlFor="description">Description:</label>
                            <input
                                type="text"
                                id="description"
                                className="form-control"
                                placeholder="description..."
                            />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <button className="btn btn-outline-primary">
                            <i className="bi bi-plus"></i> Save
                        </button>
                        <button type="button" onClick={props.onCancel} className="btn btn-outline-danger mx-2">
                            <i className="bi bi-x"></i> Cancel
                        </button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default BookForm;