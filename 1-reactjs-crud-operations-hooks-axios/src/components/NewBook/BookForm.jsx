import React, {useRef} from 'react';

const BookForm = (props) => {
    const titleInputRef = useRef("");
    const isbnInputRef = useRef(0);
    const authorInputRef = useRef("");
    const editionInputRef = useRef(1);
    const priceInputRef = useRef(0.0);
    const quantityInputRef = useRef(0);
    const ratingInputRef = useRef(1);
    const publishDateInputRef = useRef(new Date());
    const tagsInputRef = useRef("");
    const descriptionInputRef = useRef("");


    const fromSubmitHandler = (event) => {
        event.preventDefault();

        const bookData = {
            titleEnteredValue: titleInputRef.current.value,
            isbnInputEnteredValue: isbnInputRef.current.value,
            authorEnteredValue: authorInputRef.current.value,
            editionEnteredValue: editionInputRef.current.value,
            priceEnteredValue: priceInputRef.current.value,
            quantityEnteredValue: quantityInputRef.current.value,
            ratingEnteredValue: ratingInputRef.current.value,
            publishDateEnteredValue: publishDateInputRef.current.value,
            tagsEnteredValue: tagsInputRef.current.value,
            descriptionEnteredValue: descriptionInputRef.current.value,
        };

        props.OnSaveBook(bookData);
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
                                ref={titleInputRef}
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
                                ref={isbnInputRef}
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
                                        ref={authorInputRef}
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
                                        ref={editionInputRef}
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
                                        ref={priceInputRef}
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
                                        ref={quantityInputRef}
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
                                        ref={ratingInputRef}
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
                                        ref={publishDateInputRef}
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
                                ref={tagsInputRef}
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
                                ref={descriptionInputRef}
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