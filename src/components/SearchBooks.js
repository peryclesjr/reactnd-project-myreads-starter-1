import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import ListBook  from './ListBooks'
import NotFound from './NotFound';
import PropTypes from 'prop-types'


class SearchBooks extends Component {
  state = {
    query: '',
    searchedBooks: []
  }

  clearQuery() {
    this.setState({ query: '', searchedBooks: []})
  }

  search = query => {
    this.setState({ query: query })
    if (query) {
      BooksAPI.search(query).then(searchedBooks => {
        if (!searchedBooks.error) {
          searchedBooks.map(book => {
            const bookOnShelf = this.props.books.find(b => b.id === book.id)
            if (bookOnShelf) {
              book.shelf = bookOnShelf.shelf
            }
            return book
          })
        }
        this.setState({ searchedBooks})
      })
    } else {
      this.clearQuery()
    }
  }

  render() {
    const { searchedBooks } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={event => this.search(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          {searchedBooks && searchedBooks instanceof Array ? (
            <ListBook
              title={searchedBooks.length > 0 && 'Search Results'}
              atualiza={this.props.update}
              books={searchedBooks}
              showBooks={false}
            />
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}

export default SearchBooks
