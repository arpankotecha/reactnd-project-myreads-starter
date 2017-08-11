import React from 'react'
import keyIndex from 'react-key-index'
import Book from './Book'

const Bookshelf = (props) => {
  let booksWithId = keyIndex(props.books, 1)
  let books = booksWithId.map( (b)=>(
        <li key={b._titleId}>
          <Book 
            key={b._titleId} 
            book={b} 
            updateBook={props.updateBook}
          />
        </li>
  ))
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf 
