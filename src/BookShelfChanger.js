import React from 'react'

class BookShelfChanger extends React.Component {
  render(){
    return (
      <div className="book-shelf-changer">
        <select 
          value={this.props.shelf}
          onChange={(e)=>this.props.handleChange(e.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )}
}

export default BookShelfChanger
