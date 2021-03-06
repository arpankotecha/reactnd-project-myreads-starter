import React from 'react'

const BookShelfChanger = (props) => (
  <div className="book-shelf-changer">
    <select 
      value={props.shelf}
      onChange={(e)=>props.handleChange(e.target.value)}>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

export default BookShelfChanger
