import React, { Component } from 'react';
import Books from './Books';
import * as BooksAPI from './BooksAPI'

class BookShelf extends React.Component {

state = {
  books: [],

}


componentDidMount() {
  BooksAPI.getAll().then(books => {
    this.setState({books: books})})
    .catch(() => console.log('getAll failed'));
}

render(){
  let currentlyReading = this.state.books.filter((element) => element.shelf === "currentlyReading");
  let wantToRead = this.state.books.filter((element) => element.shelf === "wantToRead");
  let read = this.state.books.filter((element) => element.shelf === "read");
  return (
    <div>
<div className="bookshelf">
  <h2 className="bookshelf-title">Currently Reading</h2>
  <div className="bookshelf-books">

        <Books books = {currentlyReading } />

  </div>
</div>

<div className="bookshelf">
  <h2 className="bookshelf-title">Want to read</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
        <Books books = {wantToRead} />
    </ol>
  </div>
</div>

<div className="bookshelf">
  <h2 className="bookshelf-title">Read</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
        <Books books = {read} />
    </ol>
  </div>
</div>
</div>
)}}//end component

export default BookShelf;
