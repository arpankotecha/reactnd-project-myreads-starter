import React from 'react'
import {Link} from 'react-router-dom'
import Bookshelf from './Bookshelf'
import PageHeader from './PageHeader'

class MyReads extends React.Component{
  booksInShelf(shelf) {
      return this.props.books.filter((b)=>(b.shelf === shelf))
  }

  render(){
    return (
      <div>
        <PageHeader />
        <Bookshelf 
          title="Currently Reading" 
          books={this.booksInShelf('currentlyReading')} 
          updateBook={this.props.updateBook}
        />
        <Bookshelf 
          title="Want to Read" 
          books={this.booksInShelf('wantToRead')}
          updateBook={this.props.updateBook}
        />
        <Bookshelf 
          title="Read" 
          books={this.booksInShelf('read')}
          updateBook={this.props.updateBook}
        />
        <div className="open-search">
          <Link to="/search" className="open-search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyReads
