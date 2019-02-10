import React from 'react';
import PropTypes from 'prop-types'

const books = ({ book, update })=> {

    return(
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})` }}> </div>
            <div className="book-shelf-changer">
                <select value={book.shelf || 'none'}
                    onChange={event => update(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.titlek}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
};

books.propTypes = {
    book: PropTypes.shape({
      previewLink: PropTypes.string,
      imageLinks: PropTypes.object,
      averageRating: PropTypes.number,
      authors: PropTypes.array
    }).isRequired,
    update: PropTypes.func.isRequired
  };

export default books;


