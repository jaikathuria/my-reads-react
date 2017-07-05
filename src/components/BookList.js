import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

//Components
import BookShelf from './BookShelf'

export default class BookList extends Component {
  static propTypes = {
    shelfs: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
    })).isRequired,
    books: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      shelf: PropTypes.string.isRequired,
      imageLinks: PropTypes.object.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired)
    }))
  }
  render(){
    const shelfs = this.props.shelfs
    const books = this.props.books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { shelfs.map((shelf,index)=> (
              <BookShelf
                title={shelf.heading}
                key={index}
                books={books.filter((book) => book.shelf === shelf.name)}
              />
            ))}

          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}
