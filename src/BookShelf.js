import React, { Component } from 'react';
import Books from './Books';

class BookShelf extends React.Component {
state = {
  currentlyReading: [],
  wantToRead: [],
  read: []
}

books = this.props.books;
  updateState(books) {
    let currentlyReading = books.filter((element) => element.shelf === "currentlyReading");
    let wantToRead = books.filter((element) => element.shelf === "wantToRead");
    let read = books.filter((element) => element.shelf === "read");
    this.setState({currentlyReading: currentlyReading});
    this.setState({wantToRead: wantToRead});
    this.setState({read: read});
  }

  componentDidMount() {
    this.updateState(books);
    console.log('currently: ', currentlyReading);
  }
render(){
  return (
    <div>
<div className="bookshelf">
  <h2 className="bookshelf-title">Currently Reading</h2>
  <div className="bookshelf-books">

        <Books books = {currentlyReading}/>

  </div>
</div>

<div className="bookshelf">
  <h2 className="bookshelf-title">Want to read</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
        <Books books = {wantToRead}/>
    </ol>
  </div>
</div>

<div className="bookshelf">
  <h2 className="bookshelf-title">Read</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
        <Books books = {read}/>
    </ol>
  </div>
</div>
</div>
)}}//end component

export default BookShelf;
