import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import Book from './Book';

class Books extends React.Component {
  move(event, id) {
      const shelf = event.target.value;
      BooksAPI.update(id,shelf).then(console.log('updated', shelf))
      .catch(console.log('update failed', shelf));
  };
  render() {
    const books = this.props.books;
    console.log('move', this.props.move);
    return(
  <ol className="books-grid">
    {this.props.books.map((book) => (
    <Book book = {book} move = {this.move} />
    ))}

      </ol>
  )}
}

export default Books;
