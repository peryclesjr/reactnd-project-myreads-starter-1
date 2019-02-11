import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
//   state = {
//     query: '',
//     searchedBooks: [],
//     loading: false
//   }

//   clearQuery() {
//     this.setState({ query: '', searchedBooks: [], loading: false })
//   }

//   search = query => {
//     this.setState({ query: query, loading: true })
//     if (query) {
//       BooksAPI.search(query).then(searchedBooks => {
//         if (!searchedBooks.error) {
//           searchedBooks.map(book => {
//             const bookOnShelf = this.props.books.find(b => b.id === book.id)
//             if (bookOnShelf) {
//               book.shelf = bookOnShelf.shelf
//             }
//             return book
//           })
//         }
//         this.setState({ searchedBooks, loading: false })
//       })
//     } else {
//       this.clearQuery()
//     }
//   }

//   render() {
//     const { searchedBooks, loading } = this.state
//     return (
//       <div className="search-books">
//         <div className="search-books-bar">
//           <Link to="/" className="close-search">
//             Close
//           </Link>
//           <div className="search-books-input-wrapper">
//             <Debounce time="400" handler="onChange">
//               <input
//                 type="text"
//                 placeholder="Search by title or author"
//                 onChange={event => this.search(event.target.value)}
//               />
//             </Debounce>
//           </div>
//         </div>
//         <div className="search-books-results">
//           <div className="loading">
//             <SyncLoader loading={loading && searchedBooks.length === 0} />
//           </div>
//           {searchedBooks && searchedBooks instanceof Array ? (
//             <Shelf
//               title={searchedBooks.length > 0 && 'Search Results'}
//               update={this.props.update}
//               books={searchedBooks}
//             />
//           ) : (
//             <Shelf title={"Nothing's found. Sorry!"} />
//           )}
//         </div>
//       </div>
//     )
//   }
// }

// SearchBooks.propTypes = {
//   books: PropTypes.array.isRequired,
//   update: PropTypes.func.isRequired
 }

export default SearchBooks
