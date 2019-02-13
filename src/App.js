import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListAllBookshelves from './components/ListAllBookShelves'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    myBooks: [],
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

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Switch>
          <Route exact path="/" render={() => (
            <ListAllBookshelves myBooks={this.state.myBooks} update={this.update} showBooks={true} />
          )}
          />
          <Route path="/search" render={() => (
            <SearchBooks books={this.state.myBooks} update={this.update} showBooks={false} />
          )}
          />
          <Redirect from="*" to="/" />
        </Switch>
        <div className="open-search">
          <Link to="/search"> Add a book </Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
