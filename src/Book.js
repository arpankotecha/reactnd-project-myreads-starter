import React from 'react'
import BookTop from './BookTop'

const Book = (props) => {
  return (
    <div className="book">
      <BookTop backgroundImage={props.backgroundImage} />
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
    </div>
  )
}

export default Book
