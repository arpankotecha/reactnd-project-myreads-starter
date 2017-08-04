import React from 'react'
import {Link} from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class MyReads extends React.Component{
  state = {
    books:[],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(res=>{
        this.setState({
          books:res,
        })
      })
  }

  booksInShelf(shelf) {
      return this.state.books.filter((b)=>(b.shelf === shelf))
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

  render(){
    return (
      <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      </div>
      <Bookshelf 
        title="Currently Reading" 
        books={this.booksInShelf('currentlyReading')} 
        updateBook={(bookID, shelf)=>this.updateBook(bookID, shelf)} />
      <Bookshelf 
        title="Want to Read" 
        books={this.booksInShelf('wantToRead')}
        updateBook={(bookID, shelf)=>this.updateBook(bookID, shelf)} />
      <Bookshelf 
        title="Read" 
        books={this.booksInShelf('read')}
        updateBook={(bookID, shelf)=>this.updateBook(bookID, shelf)} />
      <div className="open-search">
        <Link to="/search" className="open-search">Add a book</Link>
      </div>
      </div>
    )
  }
}

export default MyReads
