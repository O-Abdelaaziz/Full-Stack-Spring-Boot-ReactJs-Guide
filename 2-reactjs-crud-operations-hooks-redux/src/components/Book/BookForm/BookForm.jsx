import React, {useState} from 'react';

const BookForm = (props) => {

    //region Init
    const [title, setTitle] = useState(props.book ? props.book.title : '');
    const [isbn, setIsbn] = useState(props.book ? props.book.isbn : '');
    const [description, setDescription] = useState(props.book ? props.book.description : '');
    const [edition, setEdition] = useState(props.book ? props.book.edition : '');
    const [author, setAuthor] = useState(props.book ? props.book.author : '');
    const [quantity, setQuantity] = useState(props.book ? props.book.quantity : '');
    const [price, setPrice] = useState(props.book ? props.book.price : '');
    const [rating, setRating] = useState(props.book ? props.book.rating : '');
    const [publishDate, setPublishDate] = useState(props.book ? props.book.publishDate : '');
    const [tags, setTags] = useState(props.book ? props.book.tags : '');
    //endregion

    //region Description
    const titleInputChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const isbnInputChangeHandler = (event) => {
        setIsbn(event.target.value);
    }
    const descriptionInputChangeHandler = (event) => {
        setDescription(event.target.value);
    }
    const editionInputChangeHandler = (event) => {
        setEdition(event.target.value);
    }
    const authorInputChangeHandler = (event) => {
        setAuthor(event.target.value);
    }
    const quantityInputChangeHandler = (event) => {
        setQuantity(event.target.value);
    }
    const priceInputChangeHandler = (event) => {
        setPrice(event.target.value);
    }
    const ratingInputChangeHandler = (event) => {
        setRating(event.target.value);
    }
    const publishDateInputChangeHandler = (event) => {
        setPublishDate(event.target.value);
    }
    const tagsInputChangeHandler = (event) => {
        setTags(event.target.value);
    }
    //endregion

    const fromSubmitHandler = (event) => {
        event.preventDefault();

        const book = {
            titleEnteredValue: title,
            isbnEnteredValue: isbn,
            authorEnteredValue: author,
            editionEnteredValue: edition,
            priceEnteredValue: price,
            quantityEnteredValue: quantity,
            ratingEnteredValue: rating,
            publishDateEnteredValue: publishDate,
            tagsEnteredValue: tags,
            descriptionEnteredValue: description,
        }

        props.onSaveBook(book);
    };

    return (
        <React.Fragment>
            <form onSubmit={fromSubmitHandler}>
                <div className="row justify-content-center my-2">
                    <div className="col-md-6">
                        <div className="from-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                autoFocus
                                type="text"
                                id="title"
                                className="form-control"
                                placeholder="title..."
                                required
                                value={title}
                                onChange={titleInputChangeHandler}
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
                                value={isbn}
                                onChange={isbnInputChangeHandler}
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
                                        value={author}
                                        onChange={authorInputChangeHandler}
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
                                        value={edition}
                                        onChange={editionInputChangeHandler}
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
                                        value={price}
                                        onChange={priceInputChangeHandler}
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
                                        value={quantity}
                                        onChange={quantityInputChangeHandler}
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
                                        value={rating}
                                        onChange={ratingInputChangeHandler}
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
                                        value={publishDate}
                                        onChange={publishDateInputChangeHandler}
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
                                value={tags}
                                onChange={tagsInputChangeHandler}
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
                                value={description}
                                onChange={descriptionInputChangeHandler}
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