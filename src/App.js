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
        let bookIdToShelf = {}
        for (let b of res){
          bookIdToShelf[b.id] = b.shelf
        }
        this.setState({
          books:res,
          bookIdToShelf:bookIdToShelf
        })
      })
  }

  addBook(bookId, shelf) {
    BooksAPI.update({id:bookId}, shelf)
    .then(res=>{
      let bookIdToShelf = this.state.bookIdToShelf
      let oldShelf=bookIdToShelf[bookId]
      let books = this.state.books
      let searchResults = this.state.searchResults
      let sb = searchResults.filter((b)=>b.id === bookId)[0]
      sb.shelf = shelf
      
      console.log("oldShelf", oldShelf, "newShelf", shelf)
      bookIdToShelf[bookId] = shelf
      if (oldShelf){
        let b = books.filter((b)=>b.id === bookId)[0]
        b.shelf = shelf
        this.setState({
          books:books, 
          bookIdToShelf:bookIdToShelf,
          searchResults: searchResults
        })
      }
      else
      {
        BooksAPI.get(bookId)
          .then(b=>{
            books.push(b)
            this.setState({
              books:books, 
              bookIdToShelf:bookIdToShelf,
              searchResults:searchResults
            })
     })}})
  }

  updateBook(bookId, shelf) {
    BooksAPI.update({id:bookId}, shelf)
      .then(res=>{
        let books = this.state.books
        let b = books.filter((b)=>b.id === bookId)[0]
        let bookIdToShelf = this.state.bookIdToShelf
        let searchResults = this.state.searchResults
        let sb = searchResults.filter((b)=>b.id === bookId)[0]
        sb.shelf = shelf
      
        bookIdToShelf[bookId] = shelf
        b.shelf = shelf
        this.setState({
          books: books,
          bookIdToShelf: bookIdToShelf,
          searchResults: searchResults
      })})
  }

  searchBooks(query){
    console.log("Query:", query)
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
