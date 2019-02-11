import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListAllBookshelves from './components/ListAllBookShelves'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import Router from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    myBooks: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

 componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ myBooks: books })
    })
  };

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState({
        myBooks: this.state.myBooks.filter(b => b.id !== book.id).concat(book)
      })
    })
  };

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 100,
    transition: 'scale'
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>  
            
            <Route exact path="/" render={() => (
                <ListAllBookshelves myBooks={this.state.myBooks} update={this.update} />
              )}
            />
            {/* <Route path="/search" render={() => (
                <SearchBooks books={this.state.myBooks} update={this.update} />
              )}
            />  */}
            {/* //<Route component={NotFound} /> */}
        
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
           
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
