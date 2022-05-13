import React, {useRef} from 'react';

const BookForm = (props) => {
    //region Init
    const title = useRef('');
    const isbn = useRef('');
    const description = useRef('');
    const edition = useRef('');
    const author = useRef('');
    const quantity = useRef('');
    const price = useRef('');
    const rating = useRef('');
    const publishDate = useRef('');
    const tags = useRef('');
    //endregion

    console.log(props.book)

    const fromSubmitHandler = (event) => {
        event.preventDefault();

        const book = {
            titleEnteredValue: title.current.value,
            isbnEnteredValue: isbn.current.value,
            authorEnteredValue: author.current.value,
            editionEnteredValue: edition.current.value,
            priceEnteredValue: price.current.value,
            quantityEnteredValue: quantity.current.value,
            ratingEnteredValue: rating.current.value,
            publishDateEnteredValue: publishDate.current.value,
            tagsEnteredValue: tags.current.value,
            descriptionEnteredValue: description.current.value,
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
                                defaultValue={props.book ? props.book.title : ''}
                                ref={title}
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
                                defaultValue={props.book ? props.book.isbn : ''}
                                ref={isbn}
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
                                        defaultValue={props.book ? props.book.author : ''}
                                        ref={author}
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
                                        defaultValue={props.book ? props.book.edition : ''}
                                        ref={edition}
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
                                        defaultValue={props.book ? props.book.price : ''}
                                        ref={price}
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
                                        defaultValue={props.book ? props.book.quantity : ''}
                                        ref={quantity}
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
                                        defaultValue={props.book ? props.book.rating : ''}
                                        ref={rating}
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
                                        defaultValue={props.book ? props.book.publishDate : ''}
                                        ref={publishDate}
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
                                defaultValue={props.book ? props.book.tags : ''}
                                ref={tags}
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
                                defaultValue={props.book ? props.book.description : ''}
                                ref={description}
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