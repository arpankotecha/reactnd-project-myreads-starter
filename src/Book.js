import React from 'react'
import BookTop from './BookTop'

const Book = (props) => (
      <div className="book">
        <BookTop 
          backgroundImage={props.book.imageLinks && `url(${props.book.imageLinks.smallThumbnail})`}
          shelf={props.book.shelf} 
          handleChange={(newShelf)=>props.updateBook(props.book, newShelf)}
          />
        <div className="book-title">
          {props.book.title}
        </div>
        <div className="book-authors">
          {props.book.authors && props.book.authors.reduce((a,b)=>(`${a}\n${b}`))}
        </div>
      </div>
)

export default Book
