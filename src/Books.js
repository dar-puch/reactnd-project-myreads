import React, { Component } from 'react';
import Book from './Book';
class Books extends Component {

render() {
    return(
  <ol className="books-grid">
    {this.props.books.map((book) => (
    <Book key = {book.id} book = {book} move = {this.props.move}/>
    ))}

      </ol>
  )
}
}
export default Books;
