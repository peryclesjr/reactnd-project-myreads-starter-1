import React from 'react';

//const books = ({ book, update })=> {
    class books extends React.Component {

        state = {
          myBooks: this.props.book,
        }

      render(){
    
            return(
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${this.props.book.imageLinks.smallThumbnail})` }}> </div>
                    <div className="book-shelf-changer">
                        <select value={this.props.book.shelf || 'none'}
                            onChange={(event) => this.props.update(this.props.book, event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.book.titlek}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            )
        }
};



export default books;


