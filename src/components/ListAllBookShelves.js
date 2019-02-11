import React from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

const ListAllBookshelves = (props) => {
  return (
    <div>
      <div className="list-books-content"> 
        <div>
            <ListBooks key="currentlyReading" books={props.myBooks.filter(book => book.shelf === 'currentlyReading')} atualiza={props.update} teste= 'Currently Reading'/>
            <ListBooks key="wantToRead" books={props.myBooks.filter(book => book.shelf === 'wantToRead')} atualiza={props.update} teste= 'Want To Read'/>
            <ListBooks key="read" books={props.myBooks.filter(book => book.shelf === 'read')} atualiza={props.update} teste= "Read" />   
        </div>
      </div>
    </div>
  )
}

ListAllBookshelves.propTypes = {
  myBooks: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}

export default ListAllBookshelves