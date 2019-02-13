import React from 'react';
import Prototypes from 'prop-types'
import thumb from '../icons/book-cover.jpg'

const books = (props)=> {
   // class books extends React.Component {

   
    
            return(
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover"
                     style={{ width: 128, height: 193, backgroundImage:`url(${ props.book.imageLinks? props.book.imageLinks.smallThumbnail : thumb})` }}> </div>
                    <div className="book-shelf-changer">
                        <select value={props.book.shelf || 'none'}
                            onChange={(event) => props.update(props.book, event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{props.book.title}</div>
                    <div className="book-authors">{props.book.authors}</div>
                </div>
            )
        
};

books.prototypes ={

    book :Prototypes.shape({
        smallThumbnail:Prototypes.object,
        authors:Prototypes.array,
        title: Prototypes.string
     } ),
     update: Prototypes.func.isRequired

}


export default books;


