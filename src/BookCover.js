import React from 'react'

const BookCover = (props) => {
  return (
    <div 
      className="book-cover" 
      style={{ 
        width: 128, 
        height: 188,
        backgroundImage: props.backgroundImage
      }}>
    </div>
  )
}

export default BookCover
