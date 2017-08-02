import React from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import Bookshelf from './Bookshelf'

class MyReads extends React.Component{
  state = {
    books:[
          <Book backgroundImage='url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' title="To Kill a Mockingbird" authors="Harper Lee" key="1" id="1"/>,
          <Book backgroundImage='url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' title="Ender's Game" authors="Orson Scott Card" key="2" id="1" />
    ]
  }
  render(){
    return (
      <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      </div>
      <Bookshelf title="Currently Reading" books={this.state.books} />
      <Bookshelf title="Want to Read" books={this.state.books} />
      <div className="open-search">
        <Link to="/search" className="open-search">Add a book</Link>
      </div>
      </div>
    )
  }
}

export default MyReads
