import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(res=>{
        this.setState({
          books:res,
        })
      })
  }

  addBook(bookId, shelf) {
    BooksAPI.get(bookId)
      .then(res=>{
        let books = this.state.books
        books.push(res)
        this.setState({books:res})
      })
      .then(
        BooksAPI.update({id:bookId}, shelf)
        .then(res=>{
      }))
  }

  updateBook(bookId, shelf) {
    BooksAPI.update({id:bookId}, shelf)
      .then(res=>{
        let books = this.state.books
        let b = books.filter((b)=>b.id === bookId)[0]
        b.shelf = shelf
        this.setState({
          books: books
      })})
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={props => (
          <BookSearch 
            updateBook={(bookID, shelf)=>this.updateBook(bookID, shelf)} 
          />
        )} />
        <Route exact path="/" render={props => (
          <MyReads 
            books={this.state.books} 
            updateBook={(bookID, shelf)=>this.addBook(bookID, shelf)} 
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
