import React from 'react'
import BookTop from './BookTop'

class Book extends React.Component{
  constructor(props) {
    super()

    this.state = {
      shelf: props.shelf
    }
  }

  updateShelf(shelf){
    this.setState({
      shelf: shelf})
  }

  render() {
    return (
      <div className="book">
        <BookTop 
          backgroundImage={this.props.book && `url(${this.props.book.imageLinks.smallThumbnail})`}
          shelf={this.props.book && this.props.book.shelf} 
          handleChange={(shelf)=>this.updateShelf(shelf)}/>
        <div className="book-title">{this.props.book && this.props.book.title}</div>
        <div className="book-authors">{this.props.book && this.props.book.authors && this.props.book.authors.reduce((a,b)=>(`${a}\n${b}`))}</div>
      </div>
    )
  }
}

export default Book
