import React from 'react'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

class BookSearch extends React.Component {
  state = {
    query: '',
    books: {}
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
    return (
      <div>
      <Search 
        className="search-books" 
        barClassName="search-books-bar"
        barPlaceholder="Search by title or author"
        closeClassName="close-search"
        handleChange={q => this.updateQuery(q)}
      />
      <p>{this.state.query}</p>
      {console.log(this.state.books)}
      </div>
    )
  }
}

export default BookSearch
