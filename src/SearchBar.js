import React from 'react'
import Close from './Close'
import InputText from './InputText'

const SearchBar = (props) => {
  return (
    <div className={props.className} >
      <Close to="/" className={props.closeClassName} />
        {/* 
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
          
          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <InputText placeholder={props.placeholder} />
    </div>
  )
}

export default SearchBar
