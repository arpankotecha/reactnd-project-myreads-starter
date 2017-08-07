import React from 'react'
import Book from './Book'

const Bookshelf = (props) => {
  let books = props.books.map( (b)=>(
        <li key={b.id}>
          <Book 
            key={b.id} 
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
