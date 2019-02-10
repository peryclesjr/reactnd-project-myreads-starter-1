import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const gridComponent = ({books = []}, teste, atualiza) => {

    return(

        
            <div className="bookshelf">
                <h2 className="bookshelf-title">teste</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book)=>
                        <li>
                            <Book book={book} update={atualiza}/>                        
                        </li>

                    )}
                </ol>
                </div>
            </div>

        )
};
gridComponent.propTypes = {
    myBooks: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired, 
    teste:PropTypes.string.isRequired, 
  }

export default gridComponent;