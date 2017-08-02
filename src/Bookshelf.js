import React from 'react'
import Book from './Book'

const Bookshelf = (props) => {
  let books = []
  for (let b of props.books) {
    books.push(
      <li key={b.id}>
        {b}
      </li>
    )
  }
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
