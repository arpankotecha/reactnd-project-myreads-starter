import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
  render(){
    let books = this.props.books.map((b)=>(
      <li key={b.id}>
        <Book 
          key={b.id} 
          book={b} 
          updateBook={this.props.updateBook}
        />
      </li>
    ))
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf 
