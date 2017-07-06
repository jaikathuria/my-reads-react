import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import * as BooksAPI from './../BooksAPI'
//Components
import BookShelf from './BookShelf'

export default class SearchPage extends Component {

  state = {
    books: [],
    query: ``
  }

  updateQuery = (event) => {
    const value = event.target.value
    this.setState({query: value.trim()})
  }

  handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      const value = this.state.query
      if (value.length !== 0) {
        BooksAPI.search(value, 10).then((books) => {
          books = books.filter((book)=>book.imageLinks)
          this.setState({books})
        })
      } else {
        this.setState({books: [], query: ``})
      }
    }
  }

  static propTypes = {
    myBooks: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      shelf: PropTypes.string.isRequired,
      imageLinks: PropTypes.object.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired),
      id: PropTypes.string.isRequired
    })),
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const books = this.state.books
    const query = this.state.query
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={query} onChange={this.updateQuery} onKeyPress={this.handleEnterPress}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        {this.state.query !== `` && books.length > 0 && (<BookShelf title="Search Results" books={books} onShelfChange={(id, shelf) => {
          this.props.onShelfChange(id, shelf)
        }}/>)}
      </div>
    )
  }
}
