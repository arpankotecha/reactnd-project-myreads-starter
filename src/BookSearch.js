import React from 'react'
import Search from './Search'
import BookCover from './BookCover'
import * as BooksAPI from './BooksAPI'

class BookSearch extends React.Component {
  state = {
    query: '',
    books: []
  }
  
  updateQuery(query){
    BooksAPI.search(query)
      .then(res => {
        this.setState({
          query: query,
          books: res
        })
      })
  }

  render(){
    var books = []
    for (let book of this.state.books) {
      let url = `url(${book.imageLinks.smallThumbnail})`
      books.push(
        <BookCover 
          backgroundImage={url}
          key={book.id}
          id={book.id}
        />
      )}
    return (
      <div>
      <Search 
        className="search-books" 
        barClassName="search-books-bar"
        barPlaceholder="Search by title or author"
        closeClassName="close-search"
        handleChange={q => this.updateQuery(q)}
      />
      {books}
      {console.log(this.state.books)}
      <p>{this.state.query}</p>
      </div>
    )
  }
}

export default BookSearch
