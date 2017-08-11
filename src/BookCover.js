import React from 'react'

const BookCover = (props) => {
  return (
    <div 
      className="book-cover" 
      style={{ 
        backgroundImage: props.backgroundImage,
      }}>
    </div>
  )
}

export default BookCover
