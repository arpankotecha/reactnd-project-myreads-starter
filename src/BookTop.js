import React from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'

const BookTop = (props) => {
  return (
    <div className="book-top">
      <BookCover backgroundImage={props.backgroundImage} />
      <BookShelfChanger />
    </div>
  )
}

export default BookTop
