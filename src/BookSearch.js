import React from 'react'
import Search from './Search'
import Bookshelf from './Bookshelf'

class BookSearch extends React.Component {
  componentWillUnmount(){
    this.props.updateQuery("")
  }

  render(){
    return (
      <div>
        <Search 
          className="search-books" 
          barClassName="search-books-bar"
          barPlaceholder="Search by title or author"
          closeClassName="close-search"
          handleChange={this.props.updateQuery}
        />
        <Bookshelf
          title="Add New Book"
          books={this.props.books}
          updateBook={this.props.updateBook}
        />
      </div>
    )
  }
}

export default BookSearch
