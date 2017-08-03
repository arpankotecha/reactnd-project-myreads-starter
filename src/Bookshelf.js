import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
  render(){
    let books = []
    for (let b of this.props.books) {
      books.push(
        <li key={b.id}>
          <Book 
            book={b}
          />
        </li>
      )
    }
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
