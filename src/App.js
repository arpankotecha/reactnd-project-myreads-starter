import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookSearch from './BookSearch'
import MyReads from './MyReads'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books:[],
    bookIdToShelf: {},
    searchResults:[],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(res=>{
        let bookIdToShelf = res.reduce(
          (object, book) => {
            object[book.id] = book.shelf
            return object
          }, {})
        this.setState({
          books:res,
          bookIdToShelf:bookIdToShelf
        })
      })
  }

  addBook(book, newShelf) {
    BooksAPI.update(book, newShelf)
    .then(res=>{
      this.setState((prev) => {
        let oldShelf = prev.bookIdToShelf[book.id]
        let sb = prev.searchResults.filter((b)=>b.id === book.id)[0]
        sb.shelf = newShelf
        prev.bookIdToShelf[book.id] = newShelf
        if (oldShelf){
          let b = prev.books.filter((b)=>b.id === book.id)[0]
          b.shelf = newShelf
        }
        else{
          prev.books.push(book)
        }
        return {
          books:prev.books,
          bookIdToShelf: prev.bookIdToShelf,
          searchResults: prev.searchResults
        }
      })
     })
  }

  updateBook(book, newShelf) {
    BooksAPI.update(book, newShelf)
      .then(res=>{
        this.setState((prev) => {
          let b = prev.books.filter((b)=>b.id === book.id)[0]
          b.shelf = newShelf
          let sb = prev.searchResults.filter((b)=>b.id === book.id)[0]
          if (sb) sb.shelf = newShelf
      
          prev.bookIdToShelf[book.id] = newShelf
        return {
          books: prev.books,
          bookIdToShelf: prev.bookIdToShelf,
          searchResults: prev.searchResults
      }})
  })}

  searchBooks(query){
    if (!query){
      this.setState({searchResults:[]})
    } 
    else {
      BooksAPI.search(query)
        .then(res => {
          if (res.error){
            this.setState({
              searchResults: []
            })
            console.log("BooksAPI returned error:", res.error)
          } 
          else {
            res = res.map((b)=>{
              let shelf = this.state.bookIdToShelf[b.id]
              b.shelf=shelf ? shelf : "none"
              return b
            })
            this.setState({
              searchResults: res
          })}
    })}
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={props => (
          <BookSearch 
            updateBook={(bookID, shelf)=>this.addBook(bookID, shelf)} 
            updateQuery={(query)=>this.searchBooks(query)}
            books={this.state.searchResults}
          />
        )} />
        <Route exact path="/" render={props => (
          <MyReads 
            books={this.state.books} 
            updateBook={(bookID, shelf)=>this.updateBook(bookID, shelf)} 
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
