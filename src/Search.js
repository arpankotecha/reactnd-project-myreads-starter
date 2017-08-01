import React from 'react'
import SearchBar from './SearchBar'

const Search = (props) => {
  return (
    <div className={props.className}>
      <SearchBar 
        className={props.barClassName} 
        closeClassName={props.closeClassName} 
        placeholder={props.barPlaceholder} />
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}

export default Search
