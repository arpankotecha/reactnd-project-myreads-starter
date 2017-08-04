import React from 'react'
import Search from './Search'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class BookSearch extends React.Component {
  state = {
    query: '',
    books: []
  }
  
  updateQuery(query){
    if (!query){
      this.setState({query: '', books:[]})
    } else {
      BooksAPI.search(query)
        .then(res => {
          if (res.error){
            this.setState({books: []})
          } else {
          this.setState({
            query: query,
            books: res
          })}
    })}
  }

  render(){
    return (
      <div>
      <Search 
        className="search-books" 
        barClassName="search-books-bar"
        barPlaceholder="Search by title or author"
        closeClassName="close-search"
        handleChange={q => this.updateQuery(q)}
      />
      <Bookshelf
        title="Add New Book"
        books={this.state.books}
        updateBook={this.props.updateBook}
      />
      </div>
    )
  }
}

export default BookSearch
