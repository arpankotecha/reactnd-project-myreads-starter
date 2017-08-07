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

  updateArray(bookArray, book, newShelf){
    return bookArray.map((b)=>{
      if (b.id === book.id)
        b.shelf = newShelf
      return b
    })
  }

  updateShelf(book, newShelf){
    this.setState((prev)=> {
      prev.bookIdToShelf[book.id] = newShelf

      return {
        books: this.updateArray(prev.books, book, newShelf),
        bookIdToShelf: prev.bookIdToShelf,
        searchResults: this.updateArray(prev.searchResults, book, newShelf)
      }
    })
  }

  updateBook(book, newShelf) {
    BooksAPI.update(book, newShelf)
    .then(res=>{
      if( ! this.state.bookIdToShelf[book.id] ){
        this.setState((prev)=>{
          prev.books.push(book)
          return {books:prev.books}
        })
      }
      this.updateShelf(book, newShelf)
     })
  }

  removeDuplicates(books) {
    let bookIds = books.map((b)=>b.id)
    return (books.filter(
      (b, i, a)=>(bookIds.indexOf(b.id) === i)))
  }

  handleSearchError(res){
    this.setState({
      searchResults: []
    })
  }

  handleSearchSuccess(res){
    res = res.map((b)=>{
      let shelf = this.state.bookIdToShelf[b.id]
      b.shelf=shelf ? shelf : "none"
      return b
    })
    res = this.removeDuplicates(res)
    this.setState({
      searchResults: res
  })}

  handleSearchResults(res) {
    if (res.error){
      this.handleSearchError(res)
    } 
    else {
      this.handleSearchSuccess(res)
  }}

  searchBooks(query){
    if (!query){
      this.setState({searchResults:[]})
    } 
    else {
      BooksAPI.search(query)
        .then(res => {
          this.handleSearchResults(res)
    })}
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={props => (
          <BookSearch 
            updateBook={(bookID, shelf)=>this.updateBook(bookID, shelf)} 
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
