import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class Books extends React.Component {
  state = {shelf: '',
books: []};
  move(event) {
    this.setState({shelf: event.target.value}, function () {
      const shelf = this.state.shelf;
      console.log('shelf', {shelf});
      const id = this.props.id;
      BooksAPI.update({id},{shelf}).then(console.log('updated', {shelf}));
  })};

  render() {
    const books = this.props.books;
console.log('books', {books});
    return(
  <ol className="books-grid">
    {this.props.books.map((book) => (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
          <div className="book-shelf-changer">
            <select onChange={e => this.props.move(e)}>
              <option value="move" disabled>Move to... shelf: {this.state.shelf}, id: {this.props.id};</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>

        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
      </li>
    ))}

      </ol>
  )}
}

export default Books;
