import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

//Components
import SearchPage from './components/SearchPage'
import BookList from './components/BookList'

class BooksApp extends Component {
  state = {
    books: []
  }


  shelfs = [
    {
      name: `currentlyReading`,
      heading: `Currently Reading`
    },
    {
      name: `wantToRead`,
      heading: `Want to Read`
    },
    {
      name: `read`,
      heading: `Read`
    },
  ]

  componentDidMount(){
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  render() {
    return (
      <div className="app">
          <Route
            exact
            path="/search"
            render={() => (
              <SearchPage/>
            )}
          />

          <Route
            exact
            path="/"
            render={()=>(
              <BookList
                shelfs={this.shelfs}
                books={this.state.books}
              />
            )}
          />
      </div>
    )
  }
}

export default BooksApp
