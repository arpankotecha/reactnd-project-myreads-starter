import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" render={props => (
          <BookSearch />
        )} />
        <Route exact path="/" render={props => (
          <MyReads />
        )} />
      </div>
    )
  }
}

export default BooksApp
