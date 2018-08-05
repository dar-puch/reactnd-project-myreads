import React, {Component} from 'react';
import Books from './Books';


class BookShelf extends Component {


  render() {
    let currentlyReading = this.props.books.filter((element) => element.shelf === "currentlyReading");
    let wantToRead = this.props.books.filter((element) => element.shelf === "wantToRead");
    let read = this.props.books.filter((element) => element.shelf === "read");
    return ( <div >
      <div className = "bookshelf" >
      <h2 className = "bookshelf-title" > Currently Reading < /h2>
      <div className = "bookshelf-books" >

      <Books allBooks = {
        this.props.books
      }
      books = {
        currentlyReading
      }
      move = {
        this.props.move
      }
      />

      </div>
      </div>

      <div className = "bookshelf" >
      <h2 className = "bookshelf-title" > Want to read < /h2> <
      div className = "bookshelf-books" >
      <ol className = "books-grid" >
      <Books allBooks = {
        this.props.books
      }
      books = {
        wantToRead
      }
      move = {
        this.props.move
      }/>
      </ol>
      </div>
      </div>

      <div className = "bookshelf" >
      <h2 className = "bookshelf-title" > Read < /h2> <
      div className = "bookshelf-books" >
      <ol className = "books-grid" >
      <Books allBooks = {
        this.props.books
      }
      books = {
        read
      }
      move = {
        this.props.move
      }/>
      </ol>
      </div>
      </div>
      </div>
    )
  }
}

export default BookShelf;
