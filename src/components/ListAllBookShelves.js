import React from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

const ListAllBookshelves = (props) => {
  let showMybooks = (
    <div>
    <div className="list-books-content"> 
      <div>
          <ListBooks key="currentlyReading" books={props.myBooks.filter(book => book.shelf === 'currentlyReading')} atualiza={props.update} title= 'Currently Reading'/>
          <ListBooks key="wantToRead" books={props.myBooks.filter(book => book.shelf === 'wantToRead')} atualiza={props.update} title= 'Want To Read'/>
          <ListBooks key="read" books={props.myBooks.filter(book => book.shelf === 'read')} atualiza={props.update} title= "Read" />   
      </div>
    </div>
  </div>
  )

  if (props.showBooks){
    return (
      showMybooks
    )
  }
}

ListAllBookshelves.propTypes = {
  myBooks: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}

export default ListAllBookshelves