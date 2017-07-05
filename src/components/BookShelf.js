import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
//Components
import Book from './Book'

export default class BookShelf extends Component {

  static propTypes={
    title: PropTypes.string.isRequired,
    books: PropTypes.array
  }

  render(){
    const books = this.props.books
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book)=>(
              <Book
                imageURL={book.imageLinks.thumbnail}
                title={book.title}
                author={book.authors[0]}
                key={book.id}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
