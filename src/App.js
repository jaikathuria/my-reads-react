import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

//Components
import SearchPage from './components/SearchPage'
import BookList from './components/BookList'

class BooksApp extends React.Component {
  state = {}

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
              <BookList/>
            )}
          />
      </div>
    )
  }
}

export default BooksApp
