import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';

class Books extends Component {

  render() {

    return(
  <ol className="books-grid">
    {this.props.books.map((book) => (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>


          <ShelfChanger id={book.id}/>


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
