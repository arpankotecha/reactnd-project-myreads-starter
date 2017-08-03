import React from 'react'
import {Link} from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class MyReads extends React.Component{
  state = {
    books:[
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(res=>{
        this.setState({books: res})
      })
  }

  render(){
    return (
      <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      </div>
      <Bookshelf title="Currently Reading" books={this.state.books.filter((b)=>b.shelf==="currentlyReading")} />
      <Bookshelf title="Want to Read" books={this.state.books.filter((b)=>b.shelf==="wantToRead")} />
      <Bookshelf title="Read" books={this.state.books.filter((b)=>b.shelf==="read")} />
      <div className="open-search">
        <Link to="/search" className="open-search">Add a book</Link>
      </div>
      </div>
    )
  }
}

export default MyReads
