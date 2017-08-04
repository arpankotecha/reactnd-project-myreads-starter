import React from 'react'
import BookTop from './BookTop'

class Book extends React.Component{
  render() {
    return (
      <div className="book">
        <BookTop 
          backgroundImage={`url(${this.props.book.imageLinks.smallThumbnail})`}
          shelf={this.props.book.shelf} 
          handleChange={(shelf)=>this.props.updateBook(this.props.book.id, shelf)}
          />
        <div className="book-title">
          {this.props.book.title}
        </div>
        <div className="book-authors">
          {this.props.book.authors && this.props.book.authors.reduce((a,b)=>(`${a}\n${b}`))}
        </div>
      </div>
    )
  }
}

export default Book
