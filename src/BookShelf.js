import React, { Component } from 'react';
import Books from './Books';

const BookShelf = function(props) {
  const allBooks = props.books;
  const currentlyReading = props.currentlyReading;
  const wantToRead = props.wantToRead;
  const read = props.read;
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
)}//end component

export default BookShelf;
